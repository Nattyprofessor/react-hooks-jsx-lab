import React from "react";
import { image } from "../data/data"; // Import the image from data

function About() {
  return (
    <div id="about">
      <h2>About Me</h2> {/* h2 with the text 'About Me' */}
      <p>I made this</p> {/* p element with some text */}
      <img src={image} alt="I made this" /> {/* img with correct src and alt */}
    </div>
  );
}

export default About;
