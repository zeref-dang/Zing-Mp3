import React from "react";
import { shallow } from "enzyme";
import LayoutAlbum from "./layoutAlbum";

describe("LayoutAlbum", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LayoutAlbum />);
    expect(wrapper).toMatchSnapshot();
  });
});
