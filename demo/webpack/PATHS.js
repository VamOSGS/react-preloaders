const path = require('path');

module.exports = {
  SRC: path.resolve('js'),
  DIST: path.resolve('dist'),
  APP: path.resolve('js/index'),
  TEMPLATE: path.resolve('webpack/template.html'),
  POSTCSS: path.resolve('postcss.config.js'),
};
