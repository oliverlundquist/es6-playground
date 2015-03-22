var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');

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

gulp.task('test', function () {
    return gulp.src('dist/main.js')
        .pipe(jasmine());
});

gulp.task('test-watch', function () {
    gulp.watch('dist/main.js', ['test']);
});

gulp.task('default', ['compile', 'test', 'compile-watch', 'test-watch']);
