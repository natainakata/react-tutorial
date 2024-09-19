import React, { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" style={themeStyles[theme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
