import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Card = ({ title, poster_path, vote_average, overview }) => {
  const [openDetail, setOpenDetails] = useState(false);

  return (
    <div className="card-container" onClick={() => setOpenDetails(!openDetail)}>
      <img
        width="250px"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />

      {openDetail && (
        <section>
          <h5>{title}</h5>
          <small>{overview}</small>

          <b>
            <span role="img" aria-label="emoji">
              🚧{" "}
            </span>
            {vote_average}
          </b>
        </section>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.string,
  poster_path: PropTypes.string
};

export default Card;
