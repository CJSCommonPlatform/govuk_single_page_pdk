var gulp    = require('gulp');
var bump    = require('gulp-bump');
var git     = require('gulp-git');
var replace = require('gulp-replace');
var merge   = require('merge-stream');
var del     = require('del');
var fs      = require('fs');
var run     = require('run-sequence');
var argv    = require('yargs').argv;
var spawn   = require('child_process').spawn;

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
    gulp.src('fonts/**', {base: 'src', cwd: 'src/assets'})
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
