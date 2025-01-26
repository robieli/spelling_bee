import "./letters.css";
import { useState, React } from "react";

function Letters() {
  const [answer, setAnswer] = useState("");

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="main">
      <label>
        <p>
          Letters of the spelling bee: make sure to capitalize the center
          letter!
        </p>
        <input
          name="Letters"
          onChange={handleTextAreaChange}
          style={{ marginRight: 10 }}
        />
        <button disabled={answer.length === 0}>Submit</button>
      </label>
    </div>
  );
}

export default Letters;
