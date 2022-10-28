import React from "react";
import "./card.scss";

// rfce for function
// building card with function
function Card({ name, urlCard }) {
  return (
    <a href={urlCard} className="card_back">
      <h3>{name}</h3>
      <div className="animation_card"></div>
    </a>
  );
}

export default Card;
