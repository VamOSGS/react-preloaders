## React Preloaders

[![NPM version](https://badge.fury.io/js/react-preloaders.svg)](http://badge.fury.io/js/react-preloaders)
[![Build Status](https://travis-ci.org/VamOSGS/react-preloaders.svg?branch=development)](https://travis-ci.org/VamOSGS/react-preloaders)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

it's fastest way to add nice preloader to your application.

#### [vamosgs.github.io/react-preloaders](https://vamosgs.github.io/react-preloaders/)

### Setup

Install it:

```bash
npm install react-preloaders --save
```

or

```bash
yarn add react-preloaders --save
```

### Get Started

#### find full preloaders list [here](https://vamosgs.github.io/react-preloaders/).

```jsx
import React from 'react';
import { Lines } from 'react-preloaders';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Lines
          color={'#f7f7f7'} //Default #2D2D2D
          bgColor={'#222'} //Default #F7F7F7
          time={1400} //Default #1300
        />

        <YourApp />
      </React.Fragment>
    );
  }
}
```

#### CSS loading

Packages you need

```bash
style-loader css-loader
```

more if you want to extract css you need

#### Extract ( webpack 3.x )

```bash
extract-text-webpack-plugin
```

#### Extract ( webpack 4.x )

```bash
mini-css-extract-plugin
```

#### Add this to your webpack if you don't have css loader yet

```js
{
  test: /\.css$/,
  use: [ 'style-loader', 'css-loader' ]
}
```

#### Extract ( webpack 3.x )

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.[hash].css');

module.exports = {
  plugins: [extractCSS],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader', 'postcss-loader'])
      }
    ]
  }
};
```

#### Extract ( webpack 4.x )

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
};
```

### Properties (Props)

<table>
  <tr>
    <th>Props -> </th>
    <th>Color</th>
    <th>bgColor</th>
    <th>Time</th>
  </tr>
  <tr>
    <th>type</th>
    <td>String(rgb, hex ...)</td>
    <td>String(rgb, hex ...)</td>
    <td>Number(Milliseconds)</td>
  </tr>
  <tr>
    <th>Default Value</th>
    <td>#2D2D2D</td>
    <td>#F7F7F7</td>
    <td>1300ms</td>
  </tr>
</table>
