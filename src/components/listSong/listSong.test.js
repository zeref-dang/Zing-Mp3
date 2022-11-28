import React from "react";
import { shallow } from "enzyme";
import ListSong from "./listSong";

describe("ListSong", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListSong />);
    expect(wrapper).toMatchSnapshot();
  });
});
