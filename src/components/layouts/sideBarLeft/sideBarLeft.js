import React from "react";
import Button from "../../lib/button";
import "./sideBarLeft.scss";

const SideBarLeft = () => {
  return (
    <div className="Sidebarleft-wraper">
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
