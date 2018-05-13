// General deps
const gulp = require('gulp');
const path = require('path');
const sync = require('browser-sync').create();

// JS deps
const webpack = require('webpack');
const webpack_stream = require('webpack-stream');
const webpack_config = require('./webpack.config.js');

// CSS deps
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCSS = require('gulp-uglifycss');

// All file paths
const paths = {
    source: {
        base: 'src',
        get assets() { return path.join(this.base, 'assets') },
        get html() { return path.join(this.base, '*.html') },
        get favicon() { return path.join(this.base, 'favicon.ico') },
        get sass() { return path.join(this.assets, 'sass', '*.+(scss|sass)') },
        get entry() { return path.join(this.assets, 'js', 'main.js') },
        get js() { return path.join(this.assets, 'js', '*.js') },
        get components() { return path.join(this.assets, 'js', 'components', '*.+(vue|js)') },
        get img() { return path.join(this.assets, 'img', '*.+(png|jpg)') }
    },
    dist: {
        base: 'public',
        get assets() { return path.join(this.base, 'assets') },
        get html() { return this.base },
        get css() { return path.join(this.assets, 'css') },
        get js() { return this.base },
        get img() { return path.join(this.assets, 'img') }
    }
};

function css() {
    return gulp.src(paths.source.sass)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifyCSS())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(sync.reload({
            stream: true
        }));
}
const css_task = gulp.task(css);

function js() {
    return gulp.src(paths.source.entry)
        .pipe(webpack_stream(webpack_config, webpack))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(sync.reload({
            stream: true
        }));
}
const js_task = gulp.task(js);

function html() {
    return gulp.src(paths.source.html)
        .pipe(gulp.dest(paths.dist.base))
        .pipe(sync.reload({
            stream: true
        }));
}
const html_task = gulp.task(html);

function img() {
    return gulp.src(paths.source.img)
        .pipe(gulp.dest(paths.dist.img))
        .pipe(sync.reload({
            stream: true
        }));
}
const img_task = gulp.task(img);

function favicon() {
    return gulp.src(paths.source.favicon)
        .pipe(gulp.dest(paths.dist.base))
        .pipe(sync.reload({
            stream: true
        }));
}
const favicon_task = gulp.task(favicon);


function init_watch() {
    sync.init({
        server: {
            baseDir: paths.dist.base
        }
    });

    gulp.watch([paths.source.sass, paths.source.components], css);
    gulp.watch([paths.source.js, paths.source.components], js);
    gulp.watch([paths.source.html, paths.source.components], html);
    gulp.watch(paths.source.favicon, favicon);
    gulp.watch(paths.source.img, img);
}

const preReqs = gulp.parallel(css, js, html, favicon, img);
gulp.task('serve', gulp.series(preReqs, init_watch));

gulp.task('default', preReqs);
