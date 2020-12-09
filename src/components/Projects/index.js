import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import aFT from '../../images/askFatherTime.png';
import run from '../../images/runBuddy1.png';
import shirt from '../../images/shirt1.png';
import oyster from '../../images/Roysters.png';


var style = {
  fontSize: "4rem",
  padding: "20px",
  textAlign: "center",
  fontWeight: 100,
};



function FullCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={1000000000}
      className="flex-row"
    >
      <Carousel.Item>
        <img className="d-block w-100 photo" src={aFT} alt="Second Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Ask Father Time</h4>
          <p>an advice column application</p>
          <h4>
            <a href="https://github.com/nosremetnarg/askFatherTime'">
              Repository
            </a>
          </h4>
          <h4>
            <a href="https://mighty-meadow-10557.herokuapp.com/">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={run} alt="First Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Run Buddy</h4>
          <p>
            A personal trainer website
          </p>
          <h4>
            <a href="https://github.com/nosremetnarg/run-buddy">Repository</a>
          </h4>
          <h4>
            <a href='https://nosremetnarg.github.io/run-buddy/'>Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={oyster} alt="Third Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>News by the Map</h4>
          <p>an app for searching for top news by location</p>
          <h4>
            <a href="https://github.com/mallynnk/Pearls">
              Repository
            </a>
          </h4>
          <h4>
            <a href="http://roystersnc.com/">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={oyster} alt="Fourth Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Budget Tracker</h4>
          <p>
            a Node.js app using Inquirer to gather user input and Express.js to
            serve data, while performing CRUD operations on a MySQL Database to
            store employee information
          </p>
          <h4>
            <a href="https://github.com/mallynnk/budget-tracker">Repository</a>
          </h4>
          <h4>
            <a href="https://polar-inlet-39292.herokuapp.com/">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
    </Carousel>
  );
}

export default FullCarousel;
