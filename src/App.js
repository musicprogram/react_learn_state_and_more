import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Users from './components/Users'

import Movies from './components/Movies'

class App extends Component { //1
  render() {
    return (
      <div className="App">
        <Movies/> 
      </div>
    );
  }
}

export default App;
