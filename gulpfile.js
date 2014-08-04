/**
 * @fileoverview GulpFile
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  browserify('./js/index.js')
    .bundle()
    .pipe(source('./index.js'))
    .pipe(gulp.dest('./js/bundle'))
});
