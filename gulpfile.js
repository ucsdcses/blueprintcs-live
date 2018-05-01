const gulp = require('gulp');
const path = require('path');
const sync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const uglifyJS = require('gulp-uglify-es').default;

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCSS = require('gulp-uglifycss');

const SRC = 'src';
const DST = 'public';

const ASSETS_SRC = path.join(SRC, 'assets');
const ASSETS_DST = path.join(DST, 'assets');

const SASS_SRC = path.join(ASSETS_SRC, '*.+(scss|sass)');
const JS_SRC = path.join(ASSETS_SRC, 'js/*.js');

gulp.task('css', () => {
    return gulp.src(SASS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(ASSETS_DST,'css')))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    return gulp.src(JS_SRC)
        .pipe(sourcemaps.init())
        .pipe(uglifyJS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(ASSETS_DST,'js/')))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('html', () => {
    return gulp.src(path.join(SRC, '*.html'))
        .pipe(gulp.dest(DST))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('serve', ['css', 'js', 'html'], () => {
    sync.init({
        server: {
            baseDir: DST
        }
    });

    gulp.watch(SASS_SRC, ['css']);
    gulp.watch(JS_SRC, ['js']);
    gulp.watch(path.join(SRC, '*.html'), ['html']);
});

gulp.task('default', ['css', 'js', 'html'], () => {
    return;
});
