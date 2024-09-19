import React from "react";
import ReviewCard from "./ReviewCard";

function App() {
  const reviews = [
    {
      id: 1,
      author: "ReactFan91",
      content:
        "React is an amazing library. It makes building web applications so much easier.",
    },
    {
      id: 2,
      author: "JSNinja2000",
      content:
        "JavaScript is the language of the web. With React, it becomes even more powerful.",
    },
    {
      id: 3,
      author: "ComponentMaster",
      content:
        "Reusable components are a game-changer. React makes component-based development a breeze.",
    },
  ];
  return (
    <div className="app-container">
      <h1>レビューカード</h1>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default App;
