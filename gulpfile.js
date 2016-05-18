var gulp = require('gulp');
var del  = require('del');

gulp.task('copy-platform-template', function() {
  return del('./dist/@govuk/platform-template')
    .then(function() {
      gulp.src([
        'platform-template.scss',
        'modules/**/*.scss',
        'lib/**'
      ], {base: 'src', cwd: 'src'})
        .pipe(gulp.dest('dist/@govuk/platform-template'));
    })
    .then(function() {
      gulp.src('src/@govuk/platform-template/package.json')
        .pipe(gulp.dest('dist/@govuk/platform-template'));
    });
});