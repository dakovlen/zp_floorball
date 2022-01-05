import React from "react";

import { Blog, Features, Footer, Header, Possibility, Whatzp } from './containers';
import { Zp, Brand, Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatzp />
      <Features />
      <Possibility />
      <Zp />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
