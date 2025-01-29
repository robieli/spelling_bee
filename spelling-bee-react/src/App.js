import "./App.css";
import Letters from "./components/letters.js";
import List from "./components/list.js";
import { useState, React } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        <h3>Spelling Bee Solver</h3>
      </div>
      <div className="App-body">
        <Letters setData={setData} />
        <List data={data} columns={5} />
      </div>
    </div>
  );
}

export default App;
