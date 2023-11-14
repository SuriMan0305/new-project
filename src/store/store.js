import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers";

export const store = configureStore({
  reducer: {
    list: listReducer,
  }
});