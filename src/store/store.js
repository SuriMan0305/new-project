import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/list"; //!!!импортируем так иначе не получится ничего!!!

export const store = configureStore({
  reducer: {
    list: listReducer,
  }
});