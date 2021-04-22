import axios from "axios";
import {
  FETCH_SINGLE_USERDATA_SUCCESS,
  FETCH_SINGLE_USERDATA_FAIL,
} from "./actionType";

const success = (payload) => {
  return {
    type: FETCH_SINGLE_USERDATA_SUCCESS,
    userData: payload,
  };
};

const fail = (payload) => {
  return {
    type: FETCH_SINGLE_USERDATA_FAIL,
    error: payload,
  };
};

export const fetchUserData = (id) => {
  return async (dispatch) => {
    try {
      let res = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch(success(res.data));
    } catch (e) {
      dispatch(fail(e.message));
    }
  };
};
