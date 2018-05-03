import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import { Cube } from '../../lib';

const App = () => (
  <div className="wrap">
    <Cube />
    <h1>React Preloaders</h1>
    <div className="flex">
      <Header />
      <List />
      <Footer />
    </div>
  </div>
);

export default App;
