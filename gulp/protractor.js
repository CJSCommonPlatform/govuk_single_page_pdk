'use strict';

var gulp                  = require('gulp');
var clean                 = require('gulp-clean');
var argv                  = require('yargs').argv;
var $                     = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log) {

  gulp.task('serve-protractor', function () {
    var port = 9019,
      host = '127.0.0.1';

    $.connect.server({
      port: port,
      root: 'dist',
      hostname: host
    });
  });

  gulp.task('webdriver-update', $.protractor.webdriver_update);

  gulp.task('protractor-clean', function() {
    return gulp.src(config.protractorReportPath + '/page-sources')
      .pipe(clean({read:false}));
  });

  gulp.task('protractor', ['protractor-clean', 'serve-protractor', 'webdriver-update'], function (done) {
    process.env.proxy = argv.useProxy === 'true';
    gulp.src(['e2e/**/*.spec.js'])
      .pipe($.protractor.protractor({
        configFile: 'e2e/protractor.config.js'
      }))
      .on('error', function (e) {
        log(e.message);
        done();
      })
      .on('end', function () {
        done();
      });
  });

};