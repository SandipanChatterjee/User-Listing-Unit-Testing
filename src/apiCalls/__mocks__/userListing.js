module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  UserListingApi: jest.fn().mockReturnValue({
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  }),
};
