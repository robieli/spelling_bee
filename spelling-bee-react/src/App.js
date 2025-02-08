import "./App.css";
import Letters from "./components/Letters.js";
import List from "./components/List.js";
import Footer from "./components/Footer.js";
import { keepTheme } from "./utils/themes.js";
import { useState, React, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="App">
      <div className="App-header">
        <h3>Spelling Bee Solver</h3>
      </div>
      <div className="App-body">
        <Letters setData={setData} />
        <List data={data} />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
