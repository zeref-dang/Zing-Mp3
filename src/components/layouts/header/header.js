import React from "react";
import PropTypes from "prop-types";

import Button from "../../lib/button";
import "./header.scss";
import CircleButton from "../../lib/circleButton/circleButton";
import Popup from "../../lib/popup";
import ItemTheme from "../../itemTheme/itemTheme";
import ThemeDemo from "../../../config";
import SearchInput from "../../searchInput";

const ARROWLEFT = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="17px">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </svg>
);
const ARROWRIGHT = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="17px">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const SEARCH = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
  </svg>
);

const SHIRT = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20px">
    <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
  </svg>
);

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="inner">
        <div className="left">
          <div className="button">
            <Button leftIcon={ARROWLEFT} />
            <Button leftIcon={ARROWRIGHT} />
          </div>
          <div className="logo-mobile">
            <img
              src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.64/static/media/icon_zing_mp3_60.f6b51045.svg"
              alt="logo-mobile"
            />
          </div>
          <SearchInput iconLeft={SEARCH} />
        </div>
        <div className="right">
          <Popup
            renderMain={<CircleButton isTheme>{SHIRT}</CircleButton>}
            title="Giao Diện"
          >
            <div className="header-theme-body">
              <h3>Chủ Đề</h3>
              <div className="item-theme">
                <ItemTheme listItem={ThemeDemo.themeImg} />
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  //
};

export default Header;
