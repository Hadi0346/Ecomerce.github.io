import React from "react";
import Aboutimage from "../images/s.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Aboutimage} alt="img" />
      </div>

      <div className="about-text">
        <h3>
          FreshFood, Simply<font>Delicious</font>
        </h3>
        <p>
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country.
          pakistan is a beautiful country. pakistan is a beautiful country
        </p>
        <a href="#" className="about-btn">
          Read More
        </a>
      </div>
    </div>
  );
}

export default About;
