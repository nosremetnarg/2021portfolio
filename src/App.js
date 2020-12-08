import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Resume from './components/Resume/index';



function App() {
  return (
    <Router>
      <div className="page-container">
        <h1>Grant Emerson</h1>
        <Nav></Nav>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
