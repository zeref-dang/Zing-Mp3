import React from "react";
import { shallow } from "enzyme";
import NewReleaseHome from "./newReleaseHome";

describe("NewReleaseHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewReleaseHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
