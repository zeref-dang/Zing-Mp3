import React from "react";
import { shallow } from "enzyme";
import PlayerControl from "./playerControl";

describe("PlayerControl", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlayerControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
