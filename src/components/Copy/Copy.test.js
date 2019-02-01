import React from "react";
import renderer from "react-test-renderer";
import Copy from "./Copy";

it("renders correctly", () => {
  const wrapper = renderer.create(<Copy title="title" content="content" />);

  expect(wrapper.toJSON()).toMatchSnapshot();
});
