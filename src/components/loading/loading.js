import React from "react";
import PropTypes from "prop-types";
import "./loading.scss";

const Loading = () => {
  return (
    <div>
      <div className="dot-flasing">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  //
};

export default Loading;
