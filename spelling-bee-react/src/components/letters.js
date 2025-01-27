import "./letters.css";
import { useState, React } from "react";

function Letters() {
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState("");

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  const handleClick = async () => {
    try {
      const url = "http://localhost:8000?letters=" + answer;
      const returned = await (await fetch(url)).json();
      console.log(typeof returned);
      setData(returned);
    } catch (err) {
      console.log(err.message);
    }
  };

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
        <button onClick={handleClick} disabled={!(answer.length === 7)}>
          Submit
        </button>
      </label>
    </div>
  );
}

export default Letters;
