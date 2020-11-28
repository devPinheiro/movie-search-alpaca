import React from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

const SearchInput = ({ handleChange, value }) => {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search Movies"
      onChange={handleChange}
      value={value}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default SearchInput;
