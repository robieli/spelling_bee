import "./App.css";
import React from "react";
import Letters from "./components/letters.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Spelling Bee Solver</h3>
      </div>
      <div className="App-body">
        <Letters />
      </div>
    </div>
  );
}

export default App;
