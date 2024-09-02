import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  const element = (
    <div className="container">
      <div className="content">
        {isLoggedIn ? (
          <div>
            <h1 className="title">ログイン済みです</h1>
            <button className="button" onClick={handleLogout}>
              ログアウト
            </button>
          </div>
        ) : (
          <div>
            <h1 className="title">ログインしてください</h1>
            <button className="button" onClick={handleLogin}>
              ログイン
            </button>
          </div>
        )}
        <span>isLoggedIn: {isLoggedIn.toString()}</span>
      </div>
    </div>
  );
  return element;
}

export default App;
