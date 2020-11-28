import React from "react";
import PropTypes from "prop-types";

import "./Hint.css";

const Hint = ({ hints, handleHintChange }) => {
  return (
    <div className="hint-box">
      {hints.length ? (
        hints.map(hint => (
          <div
            className="hint"
            key={hint.id}
            onClick={() => handleHintChange(hint)}
          >
            {hint.title}
          </div>
        ))
      ) : (
        <p>No Search Result</p>
      )}
    </div>
  );
};

Hint.propTypes = {
  hints: PropTypes.array,
  handleHintChange: PropTypes.func
};
export default Hint;
