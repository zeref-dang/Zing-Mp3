import React, { Children, useState } from "react";
import PropTypes from "prop-types";
import Button from "../button/button";
import ReactDOM from "react-dom";

import "./popup.scss";

const CLOSE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20px">
    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
  </svg>
);

const Popup = (props) => {
  const { title, children, renderMain } = props;

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
      {opens &&
        ReactDOM.createPortal(
          <div className="popup-children-wraper" onClick={() => handleClose()}>
            <div className="popup-children-inner">
              <div className="popup-children-header">
                <h2>{title}</h2>
                <div onClick={() => handleClose()}>{CLOSE}</div>
              </div>
              <div className="popup-children-Body">{children}</div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

Popup.propTypes = {
  //
};

export default Popup;
