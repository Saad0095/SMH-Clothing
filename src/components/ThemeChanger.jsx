import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("dark-theme")) || false
  );

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-theme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return <button onClick={() => setDarkTheme(!darkTheme)}><FontAwesomeIcon className="cursor-pointer dark:drop-shadow-lg" icon={darkTheme ? faSun : faMoon}/></button>;
};

export default ThemeChanger;
