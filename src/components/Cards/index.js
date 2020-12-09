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

function Cards() {
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={aFT} />
          <Card.Body>
            <Card.Title>Ask Father Time</Card.Title>
            <Card.Text>
              An advice column application focusing on Mental Health.
            </Card.Text>
            <Button variant="primary">Live Site</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Cards;
