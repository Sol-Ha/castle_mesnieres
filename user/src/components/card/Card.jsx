import React from "react";
import "./card.scss";

// building card with function
function Card({ name }) {
  return (
    <a href="#" className="card_back">
      <h3>{name}</h3>
      <div className="animation_card"></div>
    </a>
  );
}

export default Card;
