import React from "react";
import { mount } from "enzyme";
import UserDetails from "./UserDetails";
import { findByAttr, storeFactory } from "../../../test/testUtils";
import { Provider } from "react-redux";

const setup = (initialState = {}) => {
  console.log(initialState);
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
};

test("no data available", () => {
  let wrapper = setup();
  const data = findByAttr(wrapper, "component-userdetails");
  expect(data.length).toBe(0);
});

test("when data is available", () => {
  let userData = {
    id: 1,
    first_name: "x",
    last_name: "y",
    email: "x.y@in.com",
  };
  const error = null;
  let wrapper = setup({ ...userData, error });
  const data = findByAttr(wrapper, "component-userdetails");
  expect(data.length).toBeGreaterThan(0);
});
