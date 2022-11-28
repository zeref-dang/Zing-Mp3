import React from "react";
import { shallow } from "enzyme";
import SliderHome from "./sliderHome";

describe("SliderHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SliderHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
