import './App.css';
import './vendors/bootstrap-3.3.7/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import MainMenu from "./components/MainMenu";
import Home from "./views/Home";
import Course from "./views/Course";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";
import About from "./views/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <div className="App-header">
                  <MainMenu/>
              </div>
              <div className="App-content">
                  <Route path="/" component={Home} exact={true} strict={true}/>
                  <Route path="/about" component={About} exact={true} strict={true}/>
                  <Route path="/skills" component={Skills} exact={true} strict={true}/>
                  <Route path="/course" component={Course} exact={true} strict={true}/>
                  <Route path="/portfolio" component={Portfolio} exact={true} strict={true}/>
              </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
