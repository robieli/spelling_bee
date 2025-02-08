import "./hexagon.css";

function Hexagon({ color, letter, value }) {
  return (
    <div class="hexagon">
      <svg
        fill={color}
        height="100px"
        width="100px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 184.751 184.751"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"></path>{" "}
        </g>
      </svg>
      <input
        name="Letters"
        maxLength={1}
        onChange={letter}
        value={value}
        class={
          color === "#e7e7e7" ? "letter-input white" : "letter-input yellow"
        }
      />
    </div>
  );
}

export default Hexagon;
