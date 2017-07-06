var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

//压缩html
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'));
});

//压缩css
var cssnano = require('gulp-minify-css');
gulp.task('style', function() {
	gulp.src('css/*.css')
		.pipe(concat('index.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('dist'));
});

//压缩js
/*var uglify = require('gulp-uglify');
gulp.task('script', function() {
	gulp.src(['./js/common.js', './js/piano.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});*/

//同步代码变化
gulp.task('dist', function() {
	gulp.watch('./*.html', ['html']);
	gulp.watch(['./css/style.css', './css/conmmon.css',"./css/reset.css"], ['style']);
	/*gulp.watch(['./js/common.js', './js/piano.js'], ['script']);*/
});