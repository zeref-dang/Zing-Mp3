import React from "react";
import { shallow } from "enzyme";
import Loading from "./loading";

describe("Loading", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
