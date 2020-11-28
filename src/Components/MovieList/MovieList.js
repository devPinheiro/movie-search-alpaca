import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length ? (
        movies.map(movie => {
          return <Card key={movie.id} {...movie} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
