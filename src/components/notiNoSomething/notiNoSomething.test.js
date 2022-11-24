import React from "react";
import { shallow } from "enzyme";
import NotiNoSomething from "./notiNoSomething";

describe("NotiNoSomething", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NotiNoSomething />);
    expect(wrapper).toMatchSnapshot();
  });
});
