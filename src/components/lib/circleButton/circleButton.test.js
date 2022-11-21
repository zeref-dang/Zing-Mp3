import React from "react";
import { shallow } from "enzyme";
import CircleButton from "./circleButton";

describe("CircleButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CircleButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
