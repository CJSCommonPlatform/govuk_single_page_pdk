'use strict';

var gulp                  = require('gulp');
var run                   = require('run-sequence');
var env                   = require('gulp-env');
var clean                 = require('gulp-clean');
var fs                    = require('fs');
var mkdirp                = require('mkdirp');
var pa11y                 = require('pa11y');
var pa11yReporterHtml     = require('pa11y/reporter/html');
var pa11yOptions          = require('../pa11y.json');
var path                  = require('path');
var harness               = pa11y(pa11yOptions);
var $                     = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log) {

  gulp.task('pa11y-clean', function() {
    return gulp.src('./reports/pa11y/**/*')
      .pipe(clean({read:false}));
  });

  gulp.task('add-is-pa11y-env', function() {
    env({
      vars: {
        IS_PA11Y: true
      }
    });
  });

  const FAILURE_LEVELS = resolveFailureLevels();

  gulp.task('run-pa11y', function(done) {
    run(
      'add-is-pa11y-env',
      'build-dev',
      ['protractor', 'pa11y-clean'],
      'pa11y'
    );
  })

  gulp.task('pa11y', function (done) {

    var processingCount = 0,
      bodyContents = '',
      taskShouldFail = false,
      outstandingTasks = [];

    mkdirp.sync(path.join(process.cwd(), './reports/pa11y'));

    gulp
      .src(config.protractorReportPath + '/page-sources/*.html', { read: false })
      .on('data', processFile);

    function processFile(data) {
      const PAGE_PATH_ABS = data.history[0];
      const PAGE_PATH_REL = path.relative(data.base, PAGE_PATH_ABS);
      const PAGE_URL = `file://${PAGE_PATH_ABS}`;
      const BATCH_SIZE = 5;

      if (processingCount >= BATCH_SIZE) {
        outstandingTasks.push(data);
        setTimeout(() => { processFile(outstandingTasks.pop()); }, 5000);
        return;
      }

      ++processingCount;

      $.util.log(`Pa11y opened ${PAGE_PATH_REL}`);

      harness.run(PAGE_URL, function (error, results) {
        if (error) {
          console.log(error);
          throw error;
        }

        const REPORT_CONTENT = pa11yReporterHtml.process(results, PAGE_PATH_REL);
        prepareForCombinedReport();
        const levels = computeLevels();
        checkFailureLevels();
        --processingCount;

        $.util.log(`Pa11y processed ${PAGE_PATH_REL}`);
        $.util.log(`Pally result levels: ${JSON.stringify(levels)}`);

        if (processingCount !== 0 || outstandingTasks.length > 0) {
          // There are still files being processed.
          return;
        }

        const REPORT_ALL_CONTENT = createCombinedReport();
        const REPORT_ALL_PATH = config.pa11yReportPath + '/pa11y.html';

        fs.writeFile(REPORT_ALL_PATH, REPORT_ALL_CONTENT, function (error) {
          if (error) {
            throw error;
          }

          if (taskShouldFail) {
            log('Pa11y ran successfully but there were errors found on processed page(s)');
          }

          log(`Pa11y report written to ${REPORT_ALL_PATH}`);

          done();
        });

        function computeLevels() {
          const levels = {};
          results.map(res => res.type).forEach(type => levels[type] = 1 + (levels[type] || 0));
          return levels;
        }

        function checkFailureLevels() {
          taskShouldFail = taskShouldFail || FAILURE_LEVELS.map(level => !!levels[level]).reduce((a, b) => a || b, false);
        }

        function prepareForCombinedReport() {
          bodyContents += REPORT_CONTENT.match(/<body>(.*)<\/body>/)[1];
        }

        function createCombinedReport() {
          return REPORT_CONTENT
            .replace(/<title>.*<\/title>/, '<title>Common Platform Pa11y Report</title>')
            .replace(/<body>.*<\/body>/, `<body>${bodyContents}</body>`);
        }
      });
    }
  });

  function resolveFailureLevels() {
    switch ('none') {
      case 'notice': return ['notice', 'warning', 'error'];
      case 'warning': return ['warning', 'error'];
      case 'error': return ['error'];
      default: return [];
    }
  }
};