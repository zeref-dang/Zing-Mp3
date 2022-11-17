import React from "react";
import { shallow } from "enzyme";
import ItemTheme from "./itemTheme";

describe("ItemTheme", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ItemTheme />);
    expect(wrapper).toMatchSnapshot();
  });
});
