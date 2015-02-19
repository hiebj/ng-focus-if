'use strict';
var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  ngAnnotate = require('gulp-ng-annotate'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src('autofocus.js')
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});
