import React from "react";
import PropTypes from "prop-types";
import "./itemTheme.scss";
import Button from "../button/button";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Theme } from "../../appState/theme";
import { BackgroundTheme } from "../../appState/backgroundTheme";

const ItemTheme = (props) => {
  const { listItem = [] } = props;
  let name = "jpg";

  const setThemeUI = useSetRecoilState(Theme);
  const setBackgroundThemeUI = useSetRecoilState(BackgroundTheme);

  return listItem.map((item, index) => {
    return (
      <div key={index} className="item-theme-wraper">
        <div className="inner">
          <div className="img">
            <img src={item.src} alt={item.title} />
            <div className="before">
              <div className="before-inner">
                <Button
                  setTheme
                  onclick={() => {
                    if (index + 1 === 8) {
                      name = "svg";
                    }
                    setThemeUI(`theme${index + 1}`);
                    setBackgroundThemeUI(
                      `/resources/assets/img/theme${index + 1}.${name}`
                    );
                  }}
                >
                  Áp dụng
                </Button>
              </div>
            </div>
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
