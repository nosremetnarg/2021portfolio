import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import aFT from "../../images/askFatherTime.png";
import run from "../../images/runBuddy1.png";
import shirt from "../../images/shirt1.png";
import oyster from "../../images/Roysters.png";
import deltaRaeRadio from "../../images/deltaRaeRadio.png";
import noteTaker from "../../images/noteTaker.png";

function Cards() {
  return (
    <Container className="projectsCards">
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://mighty-meadow-10557.herokuapp.com/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/nosremetnarg/askFatherTime">Repository</a>

          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={oyster} />
          <Card.Body>
            <Card.Title>Roysters NC</Card.Title>
            <Card.Text>A family owned Oyster farm in North Carolina.</Card.Text>
            <a rel="noreferrer" target="_blank" href="http://roystersnc.com/">
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/mallynnk/Pearls">Repository</a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={run} />
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
            <Card.Text>A personal trainer business.</Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://nosremetnarg.github.io/run-buddy/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/nosremetnarg/run-buddy">Repository</a>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={deltaRaeRadio} />
          <Card.Body>
            <Card.Title>Delta Raedio</Card.Title>
            <Card.Text>A simple fun music player for my band.</Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://nosremetnarg.github.io/drRadio/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/nosremetnarg/drRadio">Repository</a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={noteTaker} />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              A simple app that allows the user to write and save notes as well
              as organize them and mark completed when the note/task is
              complete.{" "}
            </Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://frozen-inlet-63653.herokuapp.com/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/nosremetnarg/noteTaker">Repository</a>{" "}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Cards;
