import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Get Started</button>
    </div>
  );
};
export default Card