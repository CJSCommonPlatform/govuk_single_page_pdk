var gulp                  = require('gulp');
var bump                  = require('gulp-bump');
var git                   = require('gulp-git');
var replace               = require('gulp-replace');
var merge                 = require('merge-stream');
var del                   = require('del');
var fs                    = require('fs');
var run                   = require('run-sequence');
var argv                  = require('yargs').argv;
var spawn                 = require('child_process').spawn;
var gutil                 = require('gulp-util');
var mkdirp                = require('mkdirp');
var pa11y                 = require('pa11y');
var pa11yReporterHtml     = require('pa11y/reporter/html');
var pa11yOptions          = require('./pa11y.json');
var path                  = require('path');
var harness               = pa11y(pa11yOptions);

function getVersion() {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

gulp.task('release', function() {
  run(
    'test',
    [
      'build-components',
      'copy-platform-template'
    ],
    'bump-repo',
    'bump-packages',
    'commit-changes',
    'create-new-tag',
    'publish'
  );
});

gulp.task('release-beta', function() {
  run(
      'test',
      [
        'build-components',
        'copy-platform-template'
      ],
      'bump-repo',
      'bump-packages',
      'commit-changes',
      'create-new-tag-without-pushing',
      'publish-beta'
  );
});

gulp.task('clean', function() {
  return del('./dist/@govuk');
});


gulp.task('build-components', function(done) {
  spawn('npm', ['run', 'build_components'], {stdio: 'inherit'}).on('close', done);
});


gulp.task('test', function(done) {
  spawn('npm', ['run', 'test'], {stdio: 'inherit'}).on('close', done);
});


gulp.task('copy-platform-template', function() {
  return merge(
    gulp.src([
      'platform-template.scss',
      'modules/**/*.scss'
    ], {base: 'src', cwd: 'src'}),
    gulp.src('lib/**', {base: 'src', cwd: 'src'}),
    gulp.src('fonts/**', {base: 'src', cwd: 'src/assets'}),
    gulp.src('images/**', {base: 'src', cwd: 'src/assets'})
  )
    .pipe(gulp.dest('dist/@govuk/platform-template'));
});


gulp.task('bump-repo', function() {
  return gulp.src('./package.json')
    .pipe(bump({type: argv.major ? 'major' : argv.minor ? 'minor' : 'patch'}))
    .pipe(gulp.dest('./'));
});


gulp.task('bump-packages', function() {
  return gulp.src('src/**/package.json')
    .pipe(replace('0.0.0-PLACEHOLDER', getVersion()))
    .pipe(gulp.dest('./dist'));
});


gulp.task('commit-changes', function () {
  return gulp.src('package.json')
    .pipe(git.add())
    .pipe(git.commit('release(' + getVersion() + '): Version v' + getVersion()));
});


gulp.task('create-new-tag-without-pushing', function (done) {
  git.tag(getVersion(), 'Created Tag for version: ' + getVersion(), function (error) {
    if (error) {
      return done(error);
    }
  });
});

gulp.task('create-new-tag', function (done) {
  git.tag(getVersion(), 'Created Tag for version: ' + getVersion(), function (error) {
    if (error) {
      return done(error);
    }
    git.push('origin', 'master', {args: '--tags'}, done);
  });
});

gulp.task('publish', function() {
  spawn('npm', ['publish', 'dist/@govuk/platform-template'],    {stdio: 'inherit'});
  spawn('npm', ['publish', 'dist/@govuk/angularjs-components'], {stdio: 'inherit'});
});

gulp.task('publish-beta', function() {
  spawn('npm', ['publish', 'dist/@govuk/platform-template', '--tag beta'],    {stdio: 'inherit'});
  spawn('npm', ['publish', 'dist/@govuk/angularjs-components', '--tag beta'], {stdio: 'inherit'});
});

gulp.task('pa11y', function () {
  const REPORT_PATH_BASE = './reports/';
  mkdirp(REPORT_PATH_BASE, function (error) {
    var processingCount = 0,
        bodyContents = '',
        taskShouldFail = false;
    if (error) {
      throw error;
    }
    gulp.src('./src/**/*.html', {read: false})
        .on('data', function (data) {
          const PAGE_PATH_ABS = data.history[0];
          const PAGE_PATH_REL = path.relative(data.base, PAGE_PATH_ABS);
          const PAGE_URL = `file://${PAGE_PATH_ABS}`;
          ++processingCount;
          gutil.log(`Pa11y opened ${PAGE_PATH_REL}`);

          harness.run(PAGE_URL, function (error, results) {
            if (error) {

              throw error;
            }
            const REPORT_CONTENT = pa11yReporterHtml.process(results, PAGE_PATH_REL);
            prepareForCombinedReport();
            const levels = computeLevels();
            --processingCount;
            gutil.log(`Pa11y processed ${PAGE_PATH_REL}`);
            gutil.log(`Pally result levels: ${JSON.stringify(levels)}`);
            if (0 !== processingCount) {
              // There are still files being processed.
              return;
            }
            const REPORT_ALL_CONTENT = createCombinedReport();
            const REPORT_ALL_PATH = REPORT_PATH_BASE + 'pa11y.html';
            fs.writeFile(REPORT_ALL_PATH, REPORT_ALL_CONTENT, function (error) {
              if (error) {
                throw error;
              }
              gutil.log(`Pa11y report written to ${REPORT_ALL_PATH}`);
              if (taskShouldFail) {
                throw new Error('Pa11y ran successfully but there were errors on a page.');
              }
            });
            function computeLevels() {
              const levels = {};
              results.map(res => res.type).forEach(type => levels[type] = 1 + (levels[type] || 0));
              return levels;
            }

            function prepareForCombinedReport() {
              bodyContents += REPORT_CONTENT.match(/<body>(.*)<\/body>/)[1];
            }
            function createCombinedReport() {
              return REPORT_CONTENT
                  .replace(/<title>.*<\/title>/, `<title>IdAM Pa11y Report</title>`)
                  .replace(/<body>.*<\/body>/, `<body>${bodyContents}</body>`);

            }
          });
        });
  });
});