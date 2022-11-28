import React from "react";
import { useRecoilValue } from "recoil";
import { Screen } from "../../../appState/screen";
import Button from "../../lib/button";
import "./sideBarLeft.scss";

const SideBarLeft = () => {
  const screen = useRecoilValue(Screen);
  return (
    <div
      className="Sidebarleft-wraper"
      style={screen ? { height: "calc(100vh - 90px)" } : { height: "100vh" }}
    >
      <div className="inner">
        <div className="Sidebarleft-logo"></div>
        <div className="Sidebarleft-listitem">
          <Button
            sidebarList
            to="/personal"
            leftIcon={<i className="icon ic-24-LibraryTab size-24px"></i>}
          >
            Cá Nhân
          </Button>
          <Button
            sidebarList
            to="/"
            leftIcon={<i className="icon ic-24-HomeTab size-24px"></i>}
          >
            Khám Phá
          </Button>

          <Button
            sidebarList
            to="/zingchart"
            leftIcon={<i className="icon ic-24-ChartTab size-24px"></i>}
          >
            #ZingChart
          </Button>

          <Button
            sidebarList
            to="/radio"
            leftIcon={<i className="icon ic-24-RadioTab size-24px"></i>}
          >
            Radio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
