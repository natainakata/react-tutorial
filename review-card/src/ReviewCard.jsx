import React from "react";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
}

export default ReviewCard;
