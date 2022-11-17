import React from "react";
import { shallow } from "enzyme";
import SideBarLeft from "./sideBarLeft";

describe("SideBarLeft", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SideBarLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});
