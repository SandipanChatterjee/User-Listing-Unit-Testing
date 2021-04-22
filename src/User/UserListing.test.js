import React from "react";
import { shallow } from "enzyme";

jest.mock("../apiCalls");

import UserListing from "./UserListing";
import { findByAttr } from "../../test/testUtils";

import { UserListingApi as mockUserListingApi } from "../apiCalls";

const setup = () => {
  return shallow(<UserListing />);
};

describe("User data not available", () => {
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
});

describe("get user-data", () => {
  beforeEach(() => {
    mockUserListingApi.mockClear();
  });
  test("get user data on app mount", () => {});
});
