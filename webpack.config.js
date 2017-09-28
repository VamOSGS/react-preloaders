var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: {
        'app': [
            'babel-polyfill',
            'react-hot-loader/patch',
            './js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'example.js'
    },
    node: {fs: "empty"},
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },

            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {minimize: true}
                        },
                        {
                            loader: "sass-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        extractSass
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};