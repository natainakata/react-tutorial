import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`theme-toggle ${theme === "light" ? "light" : "dark"}`}
      onClick={toggleTheme}
    >
      <div className="theme-toggle-slider"></div>
      <span className="theme-label">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
