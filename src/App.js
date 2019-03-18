import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Users from './components/Users'

// import Movies from './components/Movies'

import EstadosMyApp from './components/EstadosMyApp'

class App extends Component { //1/


  render() {
    return (
      <div className="App">
        <EstadosMyApp hola="Hola Mundo"/> 
      </div>
    );
  }
}

export default App;
