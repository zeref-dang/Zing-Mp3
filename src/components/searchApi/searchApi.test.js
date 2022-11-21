import React from "react";
import { shallow } from "enzyme";
import SearchApi from "./searchApi";

describe("SearchApi", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchApi />);
    expect(wrapper).toMatchSnapshot();
  });
});
