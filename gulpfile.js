var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename'); 
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var minifyHTML = require('gulp-minify-html');

/***
***concat JavaScript to main.js
***/
gulp.task('js.concat', () => {
    return gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/'));
});

/***
***concat css
***/
gulp.task('css.concat', () => {
    return gulp.src('css/*.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('css/'));
});

/***
***compress JS
***/
gulp.task('compress', () => {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('js/'));
});

/***
***minify CSS
***/
gulp.task('cssmin', () => {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('css'));
});

/***
***JS Task
***/
gulp.task('js', ['js.concat','compress']);


/***
***CSS Task
***/

gulp.task('csstask', ['css.concat','cssmin']);

/***
***HTML minify
***/
gulp.task('minify-html', () =>{
    return gulp.src('*.html')
    .pipe(minifyHTML({empty:true}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./'));
});

/***
***Watch file change
***/
gulp.task('watch', () => {
    gulp.watch(['js/*.js'], ['js']);
    gulp.watch(['css/*.css'],['cssmin']);
});
