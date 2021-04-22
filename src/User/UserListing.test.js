import React from "react";
import { shallow } from "enzyme";
import UserListing from "./UserListing";
import { findByAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<UserListing />);
};

describe("User List", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const userComponent = findByAttr(wrapper, "component-user");
    expect(userComponent.length).toBe(1);
  });

  test("render 'user data is loading..' row when user data is loading", () => {
    const loader = findByAttr(wrapper, "loader").text();
    expect(loader).toBe("user data is loading..");
  });

  test("render rows when data is available", () => {
    const rows = findByAttr(wrapper, "user-rows");
    expect(rows.length).toBeGreaterThan(0);
  });
});
