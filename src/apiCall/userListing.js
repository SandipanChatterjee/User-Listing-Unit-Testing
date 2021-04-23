import axios from "axios";

export const userListingApi = async () => {
  try {
    let res = await axios.get("https://reqres.in/api/users");
    return { userData: res.data.data, success: true };
  } catch (e) {
    return { errorMessage: e.message, success: false };
  }
};
