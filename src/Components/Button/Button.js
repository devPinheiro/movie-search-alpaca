import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ customClassName, children, handleclick }) => {
  const buttonTypeClassName = customClassName
    ? "button-regular"
    : "button-normal";
  return (
    <button
      className={`button ${buttonTypeClassName} ${customClassName}`}
      onClick={handleclick}
    >
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  customClassName: PropTypes.string,
  children: PropTypes.any,
  handleclick: PropTypes.func
};

export default Button;
