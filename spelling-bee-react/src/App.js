import "./App.css";
import Letters from "./components/Letters.js";
import List from "./components/List.js";
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
        <List data={data} />
      </div>
    </div>
  );
}

export default App;
