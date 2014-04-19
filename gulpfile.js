var gulp 			= require('gulp');
var rename 		= require('gulp-rename');
var concat 		= require('gulp-concat');
var uglify 		= require('gulp-uglify');

gulp.task('compress', function() {
	return gulp.src('sharepointng.js')
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(''));
});

gulp.task('default', function() {
	gulp.start('compress');
});