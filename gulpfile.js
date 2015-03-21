var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('compile', function () {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(traceur())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('compile-watch', function () {
    gulp.watch('src/*.js', ['compile']);
});

gulp.task('default', ['compile', 'compile-watch']);
