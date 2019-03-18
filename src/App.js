import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Users from './components/Users'

// import Movies from './components/Movies'

// import EstadosMyApp from './components/EstadosMyApp'

// npm install --save react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from './components/rutasLearn/Index'
import About from './components/rutasLearn/About'
import Us from './components/rutasLearn/Us'


class App extends Component { //1/


  render() {
    return (
      <div className="App">
       	<Router>
       		<ul>
       			<Link to="/" className="mr-6">Index</Link>
       			<Link to="/about" className="mr-6">About</Link>
       			<Link to="/us" className="mr-6">Us</Link>
       		</ul>
       		<Route exact path="/" component={Index}></Route>
       		<Route exact path="/about" component={About}></Route>
       		<Route exact path="/us" component={Us}></Route>
       	</Router>	
      </div>
    );
  }
}

export default App;
