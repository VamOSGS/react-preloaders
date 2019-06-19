/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Dots } from 'react-preloaders';
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
    <Dots background="blur" />
    {/* <Dots color="white" background="linear-gradient(180deg, #f95759 0%, #a62022 100%)" /> */}
  </div>
);

export default App;
