import "./App.css";

function App() {
  const shoppingList = [
    { id: 1, name: "Reactシューズ 20XX限定バージョン" },
    { id: 2, name: "Reactソーダ React Tシャツ オレンジ味" },
    { id: 3, name: "React Tシャツ Mondayモデル" },
  ];
  const listItems = shoppingList.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  const content = (
    <div className="container">
      <ul>{listItems}</ul>
    </div>
  );
  return content;
}

export default App;
