import axios from "axios";
import {
  FETCH_SINGLE_USERDATA_SUCCESS,
  FETCH_SINGLE_USERDATA_FAIL,
} from "./actionType";

import { api } from "../../config/publicApi";

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
      let res = await axios.get(`${api}/${id}`);
      dispatch(success(res.data.data));
    } catch (e) {
      dispatch(fail(e.message));
    }
  };
};
