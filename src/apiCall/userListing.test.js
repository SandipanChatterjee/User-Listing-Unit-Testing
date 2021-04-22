import moxios from "moxios";
import { userListingApi } from "./userListing";

describe("user-data", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  let userData;
  test("return user data", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            username: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
          },
        ],
      });
    });
    userData = await userListingApi();
    return expect(userData).toStrictEqual([
      {
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      },
    ]);
  });
});
