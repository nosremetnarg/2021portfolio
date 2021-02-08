import React from 'react';
import Nav from 'react-bootstrap/Nav'

var style = {
    fontSize: "2rem",
    padding: "15px",
    position: "sticky",
}
const style2 = {
    textDecoration: 'none',
    color: 'black'
}

function Navigation() {
    return (
      <Nav style={style} className="justify-content-center" activeKey="/about">
      <Nav.Item >
          <Nav.Link href="/" style={style2}>About</Nav.Link>
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