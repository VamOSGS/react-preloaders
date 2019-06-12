import React from 'react';
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
  </div>
);

export default App;
