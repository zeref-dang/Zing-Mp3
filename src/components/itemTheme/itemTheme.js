import React from "react";
import { useSetRecoilState } from "recoil";
import { BackgroundTheme } from "../../appState/backgroundTheme";
import { Theme } from "../../appState/theme";
import Button from "../lib/button";
import "./itemTheme.scss";

const ItemTheme = (props) => {
  const { listItem = [] } = props;
  const setThemeUI = useSetRecoilState(Theme);
  const setBackgroundThemeUI = useSetRecoilState(BackgroundTheme);

  let name = "jpg";

  return (
    <div className="grid">
      <div className="row">
        {listItem.map((item, index) => {
          return (
            <div className="col l-3 m-4 c-6">
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
                              `resources/assets/img/imgtheme/theme${
                                index + 1
                              }.${name}`
                            );
                            let theme = {
                              themeColor: `theme${index + 1}`,
                              theme: `resources/assets/img/imgtheme/theme${
                                index + 1
                              }.${name}`,
                            };
                            localStorage.setItem(
                              "theme",
                              JSON.stringify(theme)
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemTheme;
