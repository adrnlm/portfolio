import React from "react";
import Nav from './Components/Nav';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Design from './pages/Design';
import Development from './pages/Development';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/design" exact component={Design}/>
          <Route path="/development" exact component={Development}/>
        </Switch>
      </div>
    </Router>
   
  )
}

export default App;
