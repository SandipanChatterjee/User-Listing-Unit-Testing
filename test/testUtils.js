import { rootReducer } from "../src/store/combineReducers";
import { configureStore } from "@reduxjs/toolkit";

export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState) => {
  return configureStore({ reducer: rootReducer }, initialState);
};
