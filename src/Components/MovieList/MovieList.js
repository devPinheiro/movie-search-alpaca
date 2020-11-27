import React from "react";
import Card from "../Card/Card";

import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => {
        return <Card key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
