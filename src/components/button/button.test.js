import React from "react";
import { shallow } from "enzyme";
import Button from "./button";

describe("Button", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
