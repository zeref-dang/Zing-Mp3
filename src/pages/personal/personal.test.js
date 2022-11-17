import React from "react";
import { shallow } from "enzyme";
import Personal from "./personal";

describe("Personal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Personal />);
    expect(wrapper).toMatchSnapshot();
  });
});
