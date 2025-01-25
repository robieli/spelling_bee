import "./letters.css";
import React from "react";

function Letters() {
  return (
    <div className="main">
      <label>
        <p>
          Letters of the spelling bee: make sure to capitalize the center
          letter!
        </p>
        <input name="Letters" />
      </label>
    </div>
  );
}

export default Letters;
