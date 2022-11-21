import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SideBarLeft from "./sideBarLeft";
import Header from "./header";
import "./layouts.scss";
import { Theme } from "../../appState/theme";
import { BackgroundTheme } from "../../appState/backgroundTheme";
import { KeySearch } from "../../appState/keySearch";
import SearchApi from "../searchApi";

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
    // ở đây sẽ có component searchApi (gọi Api mà không render ra gì cả) thông qua recoil keySearch
    // component này sẽ gọi Api sau đó sẽ trả ra 2 kết quả search
    //1 cái dành cho searchInput
    //1 cái cho page search
    <div
      className="Layouts-wraper"
      style={{
        backgroundImage: `url(${backgroundTheme})`,
      }}
      data-theme={theme}
    >
      {keySearch && <SearchApi />}
      <SideBarLeft />
      <div className="inner">
        <Header />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
