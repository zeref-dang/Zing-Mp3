import React from "react";
import { useRecoilValue } from "recoil";
import SideBarLeft from "./sideBarLeft";
import Header from "./header";
import "./layouts.scss";
import { Theme } from "../../appState/theme";
import { BackgroundTheme } from "../../appState/backgroundTheme";

const Layouts = (props) => {
  const { children } = props;
  const theme = useRecoilValue(Theme);
  const backgroundTheme = useRecoilValue(BackgroundTheme);
  return (
    <div
      className="Layouts-wraper"
      style={{
        //thay thế nó bằng 1 cái list
        backgroundImage: `url(${backgroundTheme})`,
      }}
      data-theme={theme}
    >
      <SideBarLeft />
      <div className="inner">
        <Header />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
