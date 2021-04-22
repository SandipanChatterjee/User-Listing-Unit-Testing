module.exports = {
  ...jest.requireActual("../userListing"),
  __esModule: true,
  userListingApi: jest.fn().mockReturnValue([
    // {
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   phone: "1-770-736-8031 x56442",
    //   website: "hildegard.org",
    // },
  ]),
};
