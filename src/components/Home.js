import React from "react";
import { name, city } from "../data/data.js"; // Import name and city from data

function Home() {
  return (
    <div id="home"> {/* div with id="home" */}
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1> {/* h1 with dynamic text and inline style */}
    </div>
  );
}

export default Home;
