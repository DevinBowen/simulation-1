import React, { Component } from 'react';
import routes from '../routes';
import {Link} from 'react-router-dom';


import '../reset.css';
import '../App.css';

class Home extends Component {
// 38D
  render() {
    return (
      // sim 22c-2,4
      <div className="home">
        <div className="header"><img src={require('../assets/logo.png')} /> SHELFIE</div>
        <div className="body">
        {/* 42E */}
        <Link to='/'><div className="shelf"><div className="sText">Shelf A</div></div></Link>
        <div className="shelf"><div className="sText">Shelf B</div></div>
        <div className="shelf"><div className="sText">Shelf C</div></div>
        <div className="shelf"><div className="sText">Shelf D</div></div>
        </div>
        {routes}
      </div>
    );
  }
}

export default Home;
