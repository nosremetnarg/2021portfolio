import React from "react";
// import Nav from './components/Nav';
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <ReactBootStrap.Navbar.Brand href="/" exact>
              Grant Emerson
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="about">
                  About
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="projects">
                  Projects
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown
                  title="Dropdown"
                  id="collasible-nav-dropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                    Action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                    Another action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                    Something
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                    Separated link
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#contact">
                  Contact
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
