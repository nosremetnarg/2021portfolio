import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;


var style = {
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "200px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer() {
  return (
    <footer style={style}>
      <p className="">
        <a
          className="btn btn-outline-dark btn-social mx-1"
          href="https://github.com/nosremetnarg"
        >
          <i
            
            
          >{github}</i>
        </a>
      </p>
      <p>Copyright © nosremetnarg 2020</p>
    </footer>
  );
}

export default Footer;