import React from "react";
import "./Card.css";
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title }</h3>
      <p>{description}</p>
      <button>Get Started</button>
    </div>
  );
};
export default Card