import React from "react";
import { shallow } from "enzyme";
import ArtistsAllSongI from "./artistsAllSongI";

describe("ArtistsAllSongI", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsAllSongI />);
    expect(wrapper).toMatchSnapshot();
  });
});
