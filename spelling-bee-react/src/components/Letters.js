import "./letters.css";
import Hexagon from "./Hexagon";
import { useState, React } from "react";

function Letters({ setData }) {
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");
  const [letter6, setLetter6] = useState("");
  const [letter7, setLetter7] = useState("");

  const [error, setError] = useState("");

  function handleLetter1(e) {
    setLetter1(e.target.value.toUpperCase());
  }
  function handleLetter2(e) {
    setLetter2(e.target.value);
  }
  function handleLetter3(e) {
    setLetter3(e.target.value);
  }
  function handleLetter4(e) {
    setLetter4(e.target.value);
  }
  function handleLetter5(e) {
    setLetter5(e.target.value);
  }
  function handleLetter6(e) {
    setLetter6(e.target.value);
  }
  function handleLetter7(e) {
    setLetter7(e.target.value);
  }

  const handleSubmit = async () => {
    if (
      letter1 &&
      letter2 &&
      letter3 &&
      letter4 &&
      letter5 &&
      letter6 &&
      letter7
    ) {
      try {
        const url =
          "http://localhost:8000?letters=" +
          letter1 +
          letter2 +
          letter3 +
          letter4 +
          letter5 +
          letter6 +
          letter7;
        const returned = await (await fetch(url)).json();
        const match = returned.match(/\w+/g);
        setData(match);
        setError("");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      setError("Fill in all hexagons before submitting!");
    }
  };

  const handleClear = () => {
    setLetter1("");
    setLetter2("");
    setLetter3("");
    setLetter4("");
    setLetter5("");
    setLetter6("");
    setLetter7("");
    setData([]);
    setError("");
  };

  const getPosition = (index) => {
    const total = 6;
    const angleStep = (2 * Math.PI) / total;
    const angle = index * angleStep - Math.PI / 2; // Start from top
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) rotate(${angle}rad) translate(100px) rotate(${-angle}rad)`,
    };
  };

  return (
    <div className="main">
      <p style={error ? {} : { paddingBottom: "70px" }}>
        Input the letters of the spelling bee as they appear in the game!
      </p>
      {error ? <p style={{ fontSize: ".7em" }}>{error}</p> : <></>}
      <div class="container">
        {/* Center hexagon */}
        <div class="item-wrapper">
          <Hexagon
            id="myInput"
            color="#f7d921"
            letter={handleLetter1}
            value={letter1}
          />
        </div>

        {/* Fixed position hexagons */}
        <div style={getPosition(0)}>
          <Hexagon color="#e7e7e7" letter={handleLetter2} value={letter2} />
        </div>
        <div style={getPosition(1)}>
          <Hexagon color="#e7e7e7" letter={handleLetter3} value={letter3} />
        </div>
        <div style={getPosition(2)}>
          <Hexagon color="#e7e7e7" letter={handleLetter4} value={letter4} />
        </div>
        <div style={getPosition(3)}>
          <Hexagon color="#e7e7e7" letter={handleLetter5} value={letter5} />
        </div>
        <div style={getPosition(4)}>
          <Hexagon color="#e7e7e7" letter={handleLetter6} value={letter6} />
        </div>
        <div style={getPosition(5)}>
          <Hexagon color="#e7e7e7" letter={handleLetter7} value={letter7} />
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <button
          class="button"
          style={{ marginRight: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button class="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Letters;
