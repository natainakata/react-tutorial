import React from "react";
import "./ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewCard;
