'use strict'

const { watch, series, src, dest, parallel } = require('gulp')
const postcss = require('gulp-postcss') // postcss的作用相当于一个跑插件的平台,具体的补前缀等操作是通过插件实现
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const salad = require('postcss-salad')(require('./salad.config.json')) // 使用 bem 风格来对 css 进行命名

function compile (done) {
  return src('./src/index.scss')
    .pipe(sass.sync())
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyFont (done) {
  return src('./src/fonts/**').pipe(dest('./lib/fonts'))
}

function watchCss (done) {
  return watch('./src/*.scss', parallel(compile))
}

function watchFonts (done) {
  return watch('./src/fonts/**', copyFont)
}

exports.build = parallel(compile, copyFont)
exports.default = series(
  compile,
  copyFont,
  parallel(watchCss, watchFonts)
)
