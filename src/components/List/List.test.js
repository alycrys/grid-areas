import React from "react";
import renderer from "react-test-renderer";
import List from "./List";
import items from "../../mocks/data";

it("renders correctly", () => {
  const wrapper = renderer.create(<List items={items} />);

  expect(wrapper.toJSON().children.length).toBe(15);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
