import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BackgroundTheme } from "../../appState/backgroundTheme";
import { KeySearch } from "../../appState/keySearch";
import { Theme } from "../../appState/theme";
import SideBarLeft from "./sideBarLeft";
import Header from "./header";
import SearchApi from "../searchApi";
import PlayerControl from "./playerControl/playerControl";
import "./layouts.scss";
import { Screen } from "../../appState/screen";

const themeLocal = JSON.parse(localStorage.getItem("theme"));

const Layouts = (props) => {
  const { children } = props;
  const theme = useRecoilValue(Theme);
  const backgroundTheme = useRecoilValue(BackgroundTheme);
  const keySearch = useRecoilValue(KeySearch);
  const screen = useRecoilValue(Screen);

  const setThemeUI = useSetRecoilState(Theme);
  const setBackgroundThemeUI = useSetRecoilState(BackgroundTheme);

  useEffect(() => {
    setThemeUI(themeLocal ? themeLocal.themeColor : "theme1");
    setBackgroundThemeUI(
      themeLocal ? themeLocal.theme : "resources/assets/img/imgtheme/theme1.jpg"
    );
  }, []);

  return (
    <div
      className="Layouts-wraper"
      style={{
        backgroundImage: `url(${backgroundTheme})`,
      }}
      data-theme={theme}
    >
      {keySearch && <SearchApi />}
      <SideBarLeft />
      <PlayerControl />
      <div className="inner">
        <Header />
        <div
          className="main"
          style={
            screen
              ? { height: "calc(100vh - 90px - 70px)" }
              : { height: "calc(100vh - 70px)" }
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layouts;
