import React from "react";
import portrait from "../../images/portrait.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

function About() {
  const style = {
    fontSize: "4rem",
    padding: "20px",
    textAlign: "center",
    fontWeight: 100,
  };

  return (
    <Container>
      <Row className="" id="about">
        <Col style={style}>About Me</Col>
      </Row>
      <Row>
        <Col>
          <Media>
            <img
              src={portrait}
              className="my-2"
              style={{ width: "100%" }}
              alt="Grant Emerson"
            />
          </Media>
        </Col>
        <Col md={8} xs={1}>
          <p>
            Professional musician turned Full Stack Developer. I'm passionate
            about connection and the power of computers to connect the world and
            the internet since AOL was in everyone's home.
          </p>
          <br></br>
          <p>
            I own a social justice T-Shirt company, humangoodkind, which donates
            a portion of proceeds to various progressive and equality minded
            organizations.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
