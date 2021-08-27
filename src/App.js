import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './LinkActive.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import LogoDesign from './MyComponents/LogoDesign';
function App() {
  return (
    <>
      <Router>
        <div className="app-main">
          <Header />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/LogoDesign">
              <LogoDesign />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
