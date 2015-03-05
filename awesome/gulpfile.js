var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('lint', function() {
  return gulp.src(['./public/scripts/**/*.js', '!./public/scripts/external/*.js', '!./public/scripts/require.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(livereload());;
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('public/scripts/**/*.js', ['lint']);
});

gulp.task('default', ['lint', 'watch'])
