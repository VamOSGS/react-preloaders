const merge = require('webpack-merge');
const PATHS = require('./PATHS');
const parts = require('./webpack.parts');
require('dotenv').config();

const development = merge(
  {
    devServer: {
      contentBase: PATHS.DIST,
      compress: true,
      historyApiFallback: true,
      hot: true,
    },
  },
  parts.buildSetup('development'),
  parts.setMode('development'),
  parts.sourceMaps('eval-source-map'),
  parts.styleLoader({
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: PATHS.POSTCSS,
          },
        },
      },
    ],
  }),
);

module.exports = development;
