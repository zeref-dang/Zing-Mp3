import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { Link, useLocation } from "react-router-dom";

const Button = ({
  to,
  href,
  children,
  primary = false,
  sidebarList = false,
  sidebaritem = false,
  leftIcon,
  rightIcon,
  style,
  setTheme,
  onclick,
}) => {
  let Comp = "button";
  const props = [];

  const location = useLocation();

  if (to) {
    props.push(to);
    Comp = Link;
  } else if (href) {
    props.push(href);
    Comp = "a";
  }

  const propsString = props.join(" ");

  return (
    <Comp
      className={`${sidebarList ? "button-sidebar" : ""}${
        sidebaritem ? "button-sidebaritem" : ""
      }${primary ? "button-primary" : ""} ${
        setTheme ? "button-settheme" : " "
      } button-btn `}
      id={location.pathname == propsString ? "active" : ""}
      to={propsString}
      style={style}
      onClick={onclick}
    >
      {leftIcon && (
        <div
          className={`${
            sidebarList ? "button-sidebar-icon-left" : ""
          } button-icon-left`}
        >
          {leftIcon}
        </div>
      )}
      <div
        className={`${sidebarList ? "button-sidebar-title" : ""}${
          sidebaritem ? "button-sidebaritem-title" : ""
        } button-title`}
      >
        {children}
      </div>
      {rightIcon && (
        <div
          className={`${
            sidebarList ? "button-sidebar-icon-right" : ""
          } button-icon-right`}
        >
          {rightIcon}
        </div>
      )}
    </Comp>
  );
};

Button.propTypes = {
  Comp: PropTypes.string,
  classes: PropTypes.array,
  iconsLeft: PropTypes.array,
  iconsRight: PropTypes.array,
  title: PropTypes.array,
  props: PropTypes.array,
};

export default Button;
