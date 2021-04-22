import { combineReducers } from "redux";
import { userReducer } from "./reducers/index";

export const rootReducer = combineReducers({
  singleUser: userReducer,
});
