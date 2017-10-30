import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from "./router.js";
import NavBar from './components/navBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="welcome">Welcome to Gallery</h1>
    
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="App_mainContainer">
          <NavBar/>
          {router}
        </div>
      </div>
    );
  }
}

export default App;
