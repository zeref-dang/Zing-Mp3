import React from "react";
import { shallow } from "enzyme";
import ArtistsSong from "./artistsSong";

describe("ArtistsSong", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ArtistsSong />);
    expect(wrapper).toMatchSnapshot();
  });
});
