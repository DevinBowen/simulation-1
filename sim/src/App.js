import React, { Component } from 'react';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // sim 22c-2,4
      <div className="home">
        <div className="header"><img src={require('./assets/logo.png')} /> SHELFIE</div>
        <div className="body">
        <div className="shelf"><div className="sText">Shelf A</div></div>
        <div className="shelf"><div className="sText">Shelf B</div></div>
        <div className="shelf"><div className="sText">Shelf C</div></div>
        <div className="shelf"><div className="sText">Shelf D</div></div>
        </div>
      </div>
    );
  }
}

export default App;
