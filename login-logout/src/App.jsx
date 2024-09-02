import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const element = (
    <div className="container">
      <div className="content"></div>
    </div>
  );
  return element;
}

export default App;
