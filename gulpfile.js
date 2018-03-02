var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles'), function(){
 gulp
    .src('index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public'))
}

gulp.task('default', ['styles'])