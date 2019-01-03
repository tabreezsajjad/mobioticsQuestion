import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navigation from './components/common/navigation';
import Content from './components/common/content';
import Footer from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
