import React from "react";
import { shallow } from "enzyme";
import ArtistsMv from "./artistsMv";

describe("ArtistsMv", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsMv />);
    expect(wrapper).toMatchSnapshot();
  });
});
