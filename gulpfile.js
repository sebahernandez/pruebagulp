

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
return gulp.src('index.scss')
.pipe(sass().on('error', sass.logError)) 
.pipe(gulp.dest('public'))
});

gulp.task('default', ['styles'])