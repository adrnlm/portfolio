import React from "react";
import Nav from './Components/Nav';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Design from './pages/Design';
import Development from './pages/Development';
import LoadingScreen from './Components/loadingScreen'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';




function App() {
  return (   
    <Router>
      <div className="App">
        {/* <LoadingScreen/> */}
        <Nav />
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/about"  component={About}/>
          <Route exact path="/design"  component={Design}/>
          <Route exact path="/development"  component={Development}/>
        </Switch>
      </div>
    </Router>
   
  )
}

export default App;
