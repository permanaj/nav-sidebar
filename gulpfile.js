const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const browsersync = require("browser-sync").create();
const del = require("del");

// BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./",
			index: 'example.html'
		},
		port: 3000
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

// Clean assets
function clean() {
	return del(["./dist/"]);
}

function css() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'))
}

function js() {
	return gulp.src('src/js/*.js', { sourcemaps: true })
		.pipe(gulp.dest('dist/js', { sourcemaps: true }))
}

// Watch files
function watchFiles() {
	gulp.watch("./src/scss/**/*", css);
	gulp.watch("./src/js/**/*", gulp.series(js));
}

const scripts = gulp.series(js);
const build = gulp.series(clean, gulp.parallel(css, js));
const watch = gulp.parallel(watchFiles, browserSync);

exports.js = js;
exports.css = css;
exports.default = gulp.parallel(css, js);
exports.watch = watch;
