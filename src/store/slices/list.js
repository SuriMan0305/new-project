import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      content: "first component",
      status: false,
    },
    {
      id: 2,
      content: "second component",
      status: false,
    },
    {
      id: 3,
      content: "third component",
      status: false,
    },
    {
      id: 4,
      content: "four component",
      status: false,
    },
    {
      id: 5,
      content: "five component",
      status: false,
    },
    {
      id: 6,
      content: "six component",
      status: false,
    },
    {
      id: 7,
      content: "seven component",
      status: false,
    },
  ],
  nextList: 0,
  prevList: 0,
}

export const list = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setData } = list.actions;

export default list.reducer;