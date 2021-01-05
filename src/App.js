import React from "react";
import Nav from './Nav'
import Home from './Home'
import About from './AboutMe'
import Design from './Design'
import Development from './Development'

import './App.css';


function App(){
  return(
    <div className="App">
      <Nav/>
      {/* <Home/>
      <Design/>
      <Development/>
      <About/> */}
      </div>
  )
}

export default App;
