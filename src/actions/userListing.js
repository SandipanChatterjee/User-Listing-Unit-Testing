import axios from "axios";

export const UserListingApi = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};
