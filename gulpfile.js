const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();
// const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglifyJS = require('gulp-uglify-es').default;
const uglifyCSS = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');

const ASSETS_SRC = 'src/assets/';
const ASSETS_DST = 'public/assets/';
const SASS_SRC = ASSETS_SRC + 'sass/*.+(scss|sass)';
const JS_SRC = ASSETS_SRC + 'js/*.js';

gulp.task('css', () => {
    return gulp.src(SASS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(ASSETS_DST + 'css/'))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    return gulp.src(JS_SRC)
        .pipe(sourcemaps.init())
        .pipe(uglifyJS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(ASSETS_DST + 'js/'))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('public/'))
        .pipe(sync.reload({
            stream: true
        }));
});

gulp.task('serve', ['css', 'js', 'html'], () => {
    sync.init({
        server: {
            baseDir: 'public'
        }
    });

    gulp.watch(SASS_SRC, ['css']);
    gulp.watch(JS_SRC, ['js']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['css', 'js', 'html'], () => {
    return;
});
