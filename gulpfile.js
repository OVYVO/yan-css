const gulp = require('gulp')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cleancss = require('gulp-clean-css')
const postcss = require('gulp-postcss')

gulp.task("less", function () {
  return gulp.src("styles/*.less")
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cleancss({
      keepBreaks: true,
      keepSpecialComments: '*'
    }))
    .pipe(gulp.dest("lib"))
})