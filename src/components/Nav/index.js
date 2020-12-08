import React from 'react';
import Nav from 'react-bootstrap/Nav'

var style = {
    fontSize: "2rem",
    padding: "20px",
    position: "sticky",
}

function Navigation() {
    return (
      <Nav style={style} className="justify-content-center" activeKey="/about">
      <Nav.Item >
          <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      </Nav> 
    )
  }

export default Navigation;