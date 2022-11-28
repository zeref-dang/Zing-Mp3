import React from "react";
import { shallow } from "enzyme";
import CardMusic from "./cardMusic";

describe("CardMusic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardMusic />);
    expect(wrapper).toMatchSnapshot();
  });
});
