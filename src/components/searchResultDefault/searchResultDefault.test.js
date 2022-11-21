import React from "react";
import { shallow } from "enzyme";
import SearchResultDefault from "./searchResultDefault";

describe("SearchResultDefault", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchResultDefault />);
    expect(wrapper).toMatchSnapshot();
  });
});
