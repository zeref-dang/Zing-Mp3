import React from "react";
import { shallow } from "enzyme";
import Artists from "./artists";

describe("Artists", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Artists />);
    expect(wrapper).toMatchSnapshot();
  });
});
