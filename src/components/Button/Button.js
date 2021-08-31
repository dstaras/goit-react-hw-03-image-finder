import React from "react";
import PropTypes from "prop-types";
import styled from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div className={styled.ButtonContainer}>
      <button className={styled.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
