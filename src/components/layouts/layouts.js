import React from "react";
import { useRecoilValue } from "recoil";
import SideBarLeft from "./sideBarLeft";
import Header from "./header";
import "./layouts.scss";
import { Theme } from "../../appState/theme";

const Layouts = (props) => {
  const { children } = props;
  const theme = useRecoilValue(Theme);
  return (
    <div
      className="Layouts-wraper"
      style={{
        //thay thế nó bằng 1 cái list
        backgroundImage: "url(/resources/assets/img/theme1.jpg)",
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
