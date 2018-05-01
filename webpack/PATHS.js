const path = require('path');

module.exports = {
  SRC: path.resolve('demo'),
  DIST: path.resolve('dist'),
  APP: path.resolve('demo/index'),
  TEMPLATE: path.resolve('webpack/template.html'),
  POSTCSS: path.resolve('postcss.config.js'),
};
