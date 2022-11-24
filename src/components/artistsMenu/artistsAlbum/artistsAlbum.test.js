import React from "react";
import { shallow } from "enzyme";
import ArtistsAlbum from "./artistsAlbum";

describe("ArtistsAlbum", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsAlbum />);
    expect(wrapper).toMatchSnapshot();
  });
});
