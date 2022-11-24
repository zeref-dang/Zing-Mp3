import React, { useState } from "react";
import PropTypes from "prop-types";

import "./popup.scss";

const Popup = (props) => {
  const { title, children, renderMain, small = false } = props;

  const [opens, setOpens] = useState(false);
  const handleClose = () => {
    setOpens(false);
  };
  return (
    <div className="popup-wraper">
      <div className="popup-inner">
        {renderMain && (
          <div className="popup-main" onClick={() => setOpens(true)}>
            {renderMain}
          </div>
        )}
      </div>
      {opens && (
        <div className="popup-children-wraper" onClick={() => handleClose()}>
          <div className={`${small ? "popup-small" : ""} popup-children-inner`}>
            <div
              className={`${small ? "popup-title" : ""} popup-children-header`}
            >
              <h2>{title}</h2>
              <div onClick={() => handleClose()}>
                {<i className="icon ic-close size-24px"></i>}
              </div>
            </div>
            <div className="popup-children-Body">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  renderMain: PropTypes.any,
  small: PropTypes.bool,
};

export default Popup;
