'use strict';

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSASS() {
  return src('./src/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./build/assets/css'));
}

exports.compileSASS = compileSASS;
