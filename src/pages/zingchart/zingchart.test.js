import React from "react";
import { shallow } from "enzyme";
import Zingchart from "./zingchart";

describe("Zingchart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Zingchart />);
    expect(wrapper).toMatchSnapshot();
  });
});
