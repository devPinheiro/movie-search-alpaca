import React from "react";
import "./SearchInput.css";

const SearchInput = ({ handleChange }) => {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search Movies"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
