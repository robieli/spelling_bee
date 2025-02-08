import "./footer.css";
import { setTheme } from "../utils/themes";
import { useState, useEffect } from "react";

function Footer() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  const handleClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  return (
    <div className="footer">
      <div className="dark-mode">
        <input
          type="checkbox"
          className="checkbox"
          checked={togClass === "dark"}
          onChange={handleClick}
        />
        <div>Dark Mode</div>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/robieli">
          <img
            src={
              togClass === "light"
                ? require("../assets/github-mark.png")
                : require("../assets/github-mark-white.png")
            }
            alt="GitHub Logo"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/elijah-robinson-549302297/"
        >
          <img
            src={
              togClass === "light"
                ? require("../assets/linkedin-square-icon.png")
                : require("../assets/linkedin-app-white-icon.png")
            }
            alt="LinkedIn Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
