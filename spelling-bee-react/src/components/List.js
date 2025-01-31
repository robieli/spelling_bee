import { React, useEffect, useState } from "react";
import "./list.css";

function List({ data }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      class="grid"
      style={{
        gridTemplateColumns: `repeat(${Math.ceil(windowWidth / 240)}, 1fr)`,
      }}
    >
      {data.map((word, index) => (
        <div key={index} class="word-box">
          {word}
        </div>
      ))}
    </div>
  );
}

export default List;
