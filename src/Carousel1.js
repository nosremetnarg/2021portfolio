import { Carousel } from "react-bootstrap";
import React from "react";
import image1 from "./images/shirt1.png";
import fatherTimePicture from "./images/askFatherTime.png";
import runBuddy from './images/runBuddy1.png';
import "./photo.css"

function Carousel1() {

    
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src={fatherTimePicture}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src={image1}
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src={runBuddy}
            alt="third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Carousel1;
