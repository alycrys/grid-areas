import React from "react";
import renderer from "react-test-renderer";
import Image from "./Image";

it("renders correctly", () => {
  const wrapper = renderer.create(<Image src="source" alt="alt text" />);

  expect(wrapper.toJSON()).toMatchSnapshot();
});
