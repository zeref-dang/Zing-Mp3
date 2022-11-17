import React from "react";
import PropTypes from "prop-types";
import "./itemTheme.scss";

const ItemTheme = (props) => {
  const { listItem = [] } = props;

  return listItem.map((item, index) => {
    return (
      <div key={index} className="item-theme-wraper">
        <div className="inner">
          <div className="img">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="title">
            <p>{item.title}</p>
          </div>
        </div>
      </div>
    );
  });
};

ItemTheme.propTypes = {
  //
};

export default ItemTheme;
