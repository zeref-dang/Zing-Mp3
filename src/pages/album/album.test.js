import React from "react";
import { shallow } from "enzyme";
import Album from "./album";

describe("Album", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Album />);
    expect(wrapper).toMatchSnapshot();
  });
});
