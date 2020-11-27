import React from "react";
import "./index.css";

const Card = ({ title, poster_path }) => {
  return (
    <div className="card-container">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
