/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Cube } from 'react-preloaders';
import Header from './Header';
import Footer from './Footer';
import List from './List';

const App = () => (
  <div className="wrap">
    <h1>React Preloaders</h1>
    <div className="flex">
      <Header />
      <List />
      <Footer />
    </div>
    <Cube />
  </div>
);

export default App;
