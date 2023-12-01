import { configureStore } from "@reduxjs/toolkit";
import { list } from "./slices/list";

export const store = configureStore({
  reducer: {
    list: list,
  }
});