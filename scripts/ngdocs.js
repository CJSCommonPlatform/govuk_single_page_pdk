var vinyl  = require('vinyl-fs');
var chalk  = require('chalk');
var ngDocs = require('gulp-ngdocs');
var ts     = require('gulp-typescript');

vinyl.src('./src/**/*.ts')
  .pipe(ngDocs.process({
    html5Mode: false,
    startPage: '/api',
    title:     'ui.app documentation',
    template:  './ngindex.tmpl'
  }))
  .pipe(vinyl.dest('./dist/docs'))
  .on('end', function() {
    console.log(chalk.cyan('[ng-docs]'), chalk.magenta('Successfully written to dist/docs'));
  });