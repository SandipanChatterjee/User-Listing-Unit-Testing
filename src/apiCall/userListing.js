import axios from "axios";

export const userListingApi = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return { userData: res.data, success: true };
  } catch (e) {
    return { errorMessage: e.message, success: false };
  }
};
