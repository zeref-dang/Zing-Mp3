import React from "react";
import { shallow } from "enzyme";
import Radio from "./radio";

describe("Radio", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Radio />);
    expect(wrapper).toMatchSnapshot();
  });
});
