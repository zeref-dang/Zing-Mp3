import React, { useState } from "react";
import PropTypes from "prop-types";
import "./circleButton.scss";

const CircleButton = (props) => {
  const { children } = props;

  return (
    <>
      <div className="circleButton-wraper">{children}</div>
    </>
  );
};

CircleButton.propTypes = {
  //
};

export default CircleButton;
