import axios from "axios";

export const userListingApi = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (e) {
    console.log("error");
  }
};
