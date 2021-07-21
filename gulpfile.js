'use strict';

const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cache = require('gulp-cache');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

const PATHS = {
  scss: 'src/assets/scss/**/*.scss',
  js: 'src/assets/js/**/*.js',
  img: 'src/assets/img/**/*',
};

function compileSASS() {
  return src(PATHS.scss).pipe(sass()).pipe(dest('./public/build/assets/css'));
}

function javascript() {
  return src(PATHS.js).pipe(dest('./public/build/assets/js'));
}

function imagenes() {
  return src(PATHS.img)
    .pipe(cache(imagemin({ optimizationLevel: 3 })))
    .pipe(dest('./public/build/img'));
}

function versionWebp() {
  return src(PATHS.img).pipe(webp()).pipe(dest('./public/build/img'));
}

function watchFiles() {
  watch(PATHS.scss, compileSASS);
  watch(PATHS.js, javascript);
  watch(PATHS.img, imagenes);
  watch(PATHS.img, versionWebp);
}

exports.compileSASS = compileSASS;

exports.default = parallel(javascript, imagenes, versionWebp, watchFiles);
