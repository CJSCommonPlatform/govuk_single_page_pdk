var gulp    = require('gulp');
var bump    = require('gulp-bump');
var git     = require('gulp-git');
var replace = require('gulp-replace');
var del     = require('del');
var fs      = require('fs');
var run     = require('run-sequence');
var argv    = require('yargs').argv;
var spawn   = require('child_process').spawn;

function getVersion() {
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

gulp.task('publish', function() {
  run([
      'build-components',
      'copy-platform-template'
    ],
    'bump-repo',
    'bump-packages',
    'commit-changes');
});

gulp.task('clean', function() {
  return del('./dist/@govuk');
});


gulp.task('build-components', function(done) {
  spawn('npm', ['run', 'build_components'], {stdio: 'inherit'}).on('close', done);
});


gulp.task('copy-platform-template', function() {
  return gulp.src([
    'platform-template.scss',
    'modules/**/*.scss',
    'lib/**'
  ], {base: 'src', cwd: 'src'})
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


gulp.task('create-new-tag', function (done) {
  git.tag(version, 'Created Tag for version: ' + getVersion(), function (error) {
    if (error) {
      return cb(error);
    }
    git.push('origin', 'master', {args: '--tags'}, done);
  });
});

gulp.task('publish-to-npm', function(done) {
  spawn('npm', ['publish'], { stdio: 'inherit' }).on('close', done);
});
