(function () {
  'use strict';

  var gulp = require('gulp');
  var config = require('./gulp.config.js');
  var wrench = require('wrench');

  var $ = require('gulp-load-plugins')({ lazy: true });

  wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
  }).map(function(file) {
    require('./gulp/' + file)(config, log);
  });

  function log(msg) {
    if (typeof (msg) === 'object') {
      for (var item in msg) {
        if (msg.hasOwnProperty(item)) {
          $.util.log($.util.colors.red(msg[item]));
        }
      }
    }
    else {
      $.util.log($.util.colors.red(msg));
    }
  }
}());










