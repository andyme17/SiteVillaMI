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

function watchFiles() {
  watch(PATHS.scss, compileSASS);
}

exports.compileSASS = compileSASS;

exports.default = parallel(watchFiles);
