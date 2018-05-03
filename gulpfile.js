const gulp = require('gulp');
const path = require('path');
const sync = require('browser-sync').create();

const webpack = require('webpack');
const webpack_stream = require('webpack-stream');
const webpack_config = require('./webpack.config.js');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCSS = require('gulp-uglifycss');

const SRC = 'src';
const DST = 'public';

const ASSETS_SRC = path.join(SRC, 'assets');
const ASSETS_DST = path.join(DST, 'assets');

const SASS_SRC = path.join(ASSETS_SRC, 'sass', '*.+(scss|sass)');
const JS_SRC = path.join(ASSETS_SRC, 'js');
const IMG_SRC = path.join(ASSETS_SRC, 'img', '*.+(png|jpg)');

gulp.task('css', () => {
    return gulp.src(SASS_SRC)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifyCSS())
        .pipe(gulp.dest(path.join(ASSETS_DST,'css')))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    return gulp.src(path.join(JS_SRC, 'main.js'))
        .pipe(webpack_stream(webpack_config, webpack))
        .pipe(gulp.dest(path.join(ASSETS_DST,'js/')))
        .pipe(sync.reload({
            stream: true
        }));
    return;
});

gulp.task('html', () => {
    return gulp.src(path.join(SRC, '*.html'))
        .pipe(gulp.dest(DST))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('img', () => {
    return gulp.src(IMG_SRC)
        .pipe(gulp.dest(path.join(ASSETS_DST, 'img')))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('serve', ['css', 'js', 'html', 'img'], () => {
    sync.init({
        server: {
            baseDir: DST
        }
    });

    gulp.watch(SASS_SRC, ['css']);
    gulp.watch(path.join(JS_SRC, 'main.js'), ['js']);
    gulp.watch(path.join(JS_SRC, 'components', '*.js'), ['js']);
    gulp.watch(path.join(SRC, '*.html'), ['html']);
    gulp.watch(IMG_SRC, ['img']);
});

gulp.task('default', ['css', 'js', 'html', 'img'], () => {
    return;
});
