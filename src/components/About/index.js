import React from "react";
// import portrait from "../../images/portrait.JPG";
import grant from "../../images/GrantEmerson1.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

function About() {
  const style = {
    fontSize: "4rem",
    // padding: "20px",
    textAlign: "center",
    fontWeight: 100,
  };

  return (
    <Container>
      <Row className="" id="about">
        <Col style={style}>About Me</Col>
      </Row>
      <Row className='aboutPage'>
        <Col md={6} s={2}>
          <Media>
            <img
              src={grant}
              className="my-2"
              style={style}
              alt="Grant Emerson"
            />
          </Media>
        </Col>
       
        <Col md={6} s={2} className="aboutText">
          <p >
            Passionate, empathetic musician turned web dev with a
            Full-Stack Web Development Certificate from Vanderbilt University.
            Experience in JS, React, HTML, CSS, SQL, Sequelize, NoSQL, MongoDB,
            MERN, SPA utilizing a strong combination of collaboration,
            communication, leadership, and results-driven problem-solving.
            Proficiency in designing, building and maintaining websites from
            conception to production. Experienced in graphic design for web
            content and merchandise. I thrive in a fast-paced and diverse
            environment prioritizing deadlines as well as deliverables.
          </p>
          <p>
            I own a social justice T-Shirt company<span><a href="https://www.humangoodkind.com/">humangoodkind</a></span>, which
            donates a portion of proceeds to various progressive and equality
            minded organizations.
          </p>
          <p>
            You can spot me around East Nashville most mornings getting miles in 🏃‍♂️
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
