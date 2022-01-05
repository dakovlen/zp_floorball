import React from "react";

import { Blog, Features, Footer, Header, Possibility, Whatzp } from './containers';
import { Zp, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
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
