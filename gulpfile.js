'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemMin = require('gulp-imagemin');
const HTMLMin = require('gulp-htmlmin');

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('images', () => {
    return gulp.src('src/img/**/*')
            .pipe(imagemMin())
            .pipe(gulp.dest('dist/img'));
});

gulp.task('html', () => {
    return gulp.src('src/index.html')
            .pipe(HTMLMin({
                collapseWhitespace: true
            }))
            .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('dist/fonts')); 
})

gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')
            .pipe(gulp.dest('dist/js'))
            .pipe(browserSync.stream());
})

gulp.task('styles', () => {
    return gulp.src('src/sass/**/*.+(scss|sass)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('src/js/*.js').on('change', gulp.parallel('scripts'));
    gulp.watch('src/*.html').on('change', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'images', 'html', 'fonts', 'scripts', ));