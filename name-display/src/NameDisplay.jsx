import React from "react";
import "./NameDisplay.css";

const NameDisplay = (props) => {
  return (
    <div className="name-display">
      <h2 className="name">{props.name}</h2>
    </div>
  );
};

export default NameDisplay;
