## React Preloaders

![React Preloaders](https://raw.githubusercontent.com/VamOSGS/react-preloaders/development/assets/react-preloaders-card.jpg)

![npm](https://img.shields.io/npm/v/react-preloaders.svg?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-preloaders.svg?style=flat-square)
![Travis (.org) branch](https://img.shields.io/travis/vamosgs/react-preloaders/development.svg?style=flat-square)
[![npm downloads](https://img.shields.io/npm/dm/react-preloaders.svg?style=flat-square)](https://www.npmjs.org/package/react-preloaders)
![NPM](https://img.shields.io/npm/l/react-preloaders.svg?style=flat-square)
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

### Simplest way

```jsx
import React from 'react';
import { Lines } from 'react-preloaders';

function App() {
  return (
    <React.Fragment>
      <YourApp />
      <Lines />
    </React.Fragment>
  );
}
```

### Properties (Props)

<table>
  <tr>
    <th>Prop</th>
    <th>type</th>
    <th>Default value</th>
  </tr>
  <tr>
    <th><a href="#color-string">color</a></th>
    <td>String(hex, rgb,...)</td>
    <td>#2D2D2D</td>
  </tr>
  <tr>
    <th><a href="#background-string">background</a></th>
    <td>String(blur, gradient...)</td>
    <td>#F7F7F7</td>
  </tr>
   <tr>
    <th><a href="#time-number">time</a></th>
    <td>Number(Milliseconds)</td>
    <td>1300ms</td>
  </tr>
   <tr>
    <th><a href="#animation-string">animation</a></th>
    <td>String(fade, slide...)</td>
    <td>fade</td>
  </tr>
  <tr>
    <th><a href="#customloading-boolean">customLoading</a></th>
    <td>Boolean</td>
    <td>undefined</td>
  </tr>
</table>

## color (String)

Color (hex, rgb, rgba) defines preloaders main color.

```jsx
import { Lines } from 'react-preloaders';

<Lines color={'#f7f7f7'} />;
<Lines color={'rgb(158, 38, 102)'} />;
```

## background (String)

Background can be just color (hex, rgb), gradient or blured.
For just colored background pass color(hex, rgb, rgba).

```jsx
import { Lines } from 'react-preloaders';

<Lines background="#f7f7f7" />;
```

For gradient background pass your gradient.

You can generate gradients [here](https://cssgradient.io/).

```jsx
import { Lines } from 'react-preloaders';

<Lines background="linear-gradient(180deg, #f95759 0%, #a62022 100%)" />;
```

For blured background just pass blur.(it's now in beta)

```jsx
import { Lines } from 'react-preloaders';

<Lines background="blur" />;
```

## time (Number)

Time defines how long you want show preloader after page loaded.

```jsx
import { Lines } from 'react-preloaders';

<Lines time={1800} />;
```

### If your are using [customLoading](#customLoading) and you don't want play preloader if your loading status false you need to pass time 0

```jsx
import { Lines } from 'react-preloaders';

<Lines customLoading={loading} time={0} />;
```

## animation (String)

Now you can choose preloader closing animation, in this version available just 2 animations <b>fade</b> and <b>slide</b>.
By default preloader will close with <b>fade</b> animation.

#### For <b>slide</b> animation you can choose direction.

```jsx
import { Lines } from 'react-preloaders';

<Lines animation="slide" />;
<Lines animation="slide-down" />;
<Lines animation="slide-right" />;
<Lines animation="slide-left" />;
```

## customLoading (Boolean)

If in your app somthing loads async you can use preloaders too. For <b>customLoading</b> you need to pass your loading status.

```jsx
import React, { Component } from 'react';
import { Lines } from 'react-preloaders';

class App {
  constructor() {
    state = {
      loading: true
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setState({ loading: false });
      })
      .catch(err => {
        setState({ loading: false });
      });
  }
  render() {
    return (
      <React.Fragment>
        <YourApp />
        <Lines customLoading={loading} />
      </React.Fragment>
    );
  }
}
```

### Example with hooks

```jsx
import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <YourApp />
      <Lines customLoading={loading} />
    </React.Fragment>
  );
}
```

#### CSS loading (under v3.x.x) methods for old versions

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
