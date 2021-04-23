import {
  FETCH_SINGLE_USERDATA_FAIL,
  FETCH_SINGLE_USERDATA_SUCCESS,
} from "../actions/actionType";

const initState = {
  userData: {},
  error: null,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USERDATA_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        error: null,
      };
    case FETCH_SINGLE_USERDATA_FAIL:
      return {
        ...state,
        userData: {},
        error: action.error,
      };
    default:
      return state;
  }
};
