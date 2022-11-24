import React from "react";
import { shallow } from "enzyme";
import ArtistsSingle from "./artistsSingle";

describe("ArtistsSingle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsSingle />);
    expect(wrapper).toMatchSnapshot();
  });
});
