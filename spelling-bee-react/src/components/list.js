import React from "react";
import "./list.css";

function List({ data, columns }) {
  const splitIntoThree = (arr) => {
    const len = arr.length;
    const part1 = arr.slice(0, Math.ceil(len / 3));
    const part2 = arr.slice(Math.ceil(len / 3), Math.ceil((2 * len) / 3));
    const part3 = arr.slice(Math.ceil((2 * len) / 3));

    return [part1, part2, part3];
  };

  const [list1, list2, list3] = splitIntoThree(data);

  return (
    // <div class="container">
    //   <ul class="list">
    //     {list1.map((item) => (
    //       <li>{item}</li>
    //     ))}
    //   </ul>
    //   <ul class="list">
    //     {list2.map((item) => (
    //       <li>{item}</li>
    //     ))}
    //   </ul>
    //   <ul class="list">
    //     {list3.map((item) => (
    //       <li>{item}</li>
    //     ))}
    //   </ul>
    // </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {data.map((word, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            color: "black",
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

export default List;
