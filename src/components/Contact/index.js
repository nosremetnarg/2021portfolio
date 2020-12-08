import React from "react";
import contactMe from "../../images/contactMe.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const style = {
    fontSize: "4rem",
    padding: "20px",
    textAlign: "center",
    fontWeight: 100,
  };
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const email = <FontAwesomeIcon icon={faPaperPlane} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  const instagram = <FontAwesomeIcon icon={faInstagramSquare} />;

  return (
    <Container>
      <Row className="" id="about">
        <Col style={style}>Lets Connect</Col>
      </Row>
      <Row>
        <Col>
          <Media>
            <img
              src={contactMe}
              className="my-2"
              style={{ width: "100%" }}
              alt="Grant Emerson"
            />
          </Media>
        </Col>
        <Col md={8} xs={1}>
          <p>
            <i>{email} </i>
            <a href="mailto: grant.alex.emerson@gmail.com">
              grant.alex.emerson@gmail.com
            </a>
          </p>
          <br></br>
          <p>
            <i>{github} </i>
            <a
              href="https://github.com/nosremetnarg"
              rel="noreferrer"
              target="_blank"
            >
              github.com/nosremetnarg
            </a>
          </p>
          <br></br>
          <p>
            <i>{linkedIn} </i>
            <a
              href="https://www.linkedin.com/in/grant-emerson-14893831/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <br></br>
          <p>
            <i>{twitter} </i>
            <a
              href="https://twitter.com/Nosremetnarg/"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </p>
          <br></br>
          <p>
            <i>{instagram} </i>
            <a
              href="https://instagram.com/Nosremetnarg/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
