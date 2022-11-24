import React from "react";
import { shallow } from "enzyme";
import ArtistsMenu from "./artistsMenu";

describe("ArtistsMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
