import React from "react";
import { shallow } from "enzyme";
import ArtistsAll from "./artistsAll";

describe("ArtistsAll", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsAll />);
    expect(wrapper).toMatchSnapshot();
  });
});
