import React from "react";
import { shallow } from "enzyme";
import Layouts from "./layouts";

describe("Layouts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Layouts />);
    expect(wrapper).toMatchSnapshot();
  });
});
