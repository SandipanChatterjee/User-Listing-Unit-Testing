import React from "react";
import { mount, shallow } from "enzyme";
import UserListing from "./UserListing";
import { findByAttr } from "../../../test/testUtils";

jest.mock("../apiCall/__mocks__/userListing");
import { userListingApi as mockUserListingApi } from "../../apiCall/__mocks__/userListing";

const setup = () => {
  return mount(<UserListing />);
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
  test("get user data on app mount", () => {
    const wrapper = setup();
    expect(mockUserListingApi).toHaveBeenCalledTimes(1);
  });
});
