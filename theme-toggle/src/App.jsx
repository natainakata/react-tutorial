import React from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <h1>画面モード切り替えアプリ</h1>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
