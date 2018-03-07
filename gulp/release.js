'use strict';

var gulp                  = require('gulp');
var bump                  = require('gulp-bump');
var git                   = require('gulp-git');
var replace               = require('gulp-replace');
var merge                 = require('merge-stream');
var fs                    = require('fs');
var run                   = require('run-sequence');
var del                   = require('del');
var spawn                 = require('child_process').spawn;
var argv                  = require('yargs').argv;

module.exports = function(config, log) {

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
        // 'bump-repo',
        // 'bump-packages',
        // 'commit-changes',
        // 'create-new-tag-without-pushing',
        'publish-beta'
    );
  });

  gulp.task('clean', function() {
    return del('./dist/@cppui');
  });

  gulp.task('build-packages', () => {
    return run(
      'test', [
        'build-components',
        'copy-platform-template'
      ],
      'bump-packages'
    );
  });

  gulp.task('build-components', function(done) {
    spawn('npm', ['run', 'build_components'], {stdio: 'inherit'}).on('close', done);
  });

  gulp.task('build-dev', function(done) {
    spawn('npm', ['run', 'build_dev'], {stdio: 'inherit'}).on('close', done);
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
      .pipe(gulp.dest('dist/@cppui/platform-template'));
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
    spawn('npm', ['publish', 'dist/@cppui/platform-template'],    {stdio: 'inherit'});
    spawn('npm', ['publish', 'dist/@cppui/angularjs-components'], {stdio: 'inherit'});
  });

  gulp.task('publish-beta', function() {
    spawn('npm', ['publish', 'dist/@cppui/platform-template', '--tag beta'],    {stdio: 'inherit'});
    spawn('npm', ['publish', 'dist/@cppui/angularjs-components', '--tag beta'], {stdio: 'inherit'});
  });
};
