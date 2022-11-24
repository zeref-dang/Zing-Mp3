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

const themeLocal = JSON.parse(localStorage.getItem("theme"));

const Layouts = (props) => {
  const { children } = props;
  const theme = useRecoilValue(Theme);
  const backgroundTheme = useRecoilValue(BackgroundTheme);
  const keySearch = useRecoilValue(KeySearch);

  const setThemeUI = useSetRecoilState(Theme);
  const setBackgroundThemeUI = useSetRecoilState(BackgroundTheme);

  useEffect(() => {
    setThemeUI(themeLocal.themeColor);
    setBackgroundThemeUI(themeLocal.theme);
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
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
