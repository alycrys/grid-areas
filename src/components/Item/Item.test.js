import React from "react";
import renderer from "react-test-renderer";
import Item from "./Item";
import items from "../../mocks/data";

it("renders correctly", () => {
  const wrapper = renderer.create(<Item item={items[0]} />);

  expect(wrapper.toJSON()).toMatchSnapshot();
});
