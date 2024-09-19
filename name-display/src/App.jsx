import NameDisplay from "./NameDisplay";
import "./App.css";

function App() {
  const name = "React Practice";
  return (
    <div className="app-container">
      <h1 className="app-heading">名前表示アプリ</h1>
      <NameDisplay name={name}></NameDisplay>
    </div>
  );
}

export default App;
