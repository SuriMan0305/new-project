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
  counter: -1,
};

export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // данные из диспатча передаются в state
    },
    setNext: (state) => {
      // добавляем к счетчику и делаем всё неактивным
      state.counter++;
      state.data = state.data.map((element) => {
        return { ...element, status: false };
      });
      // добавляем к счетчику и делаем всё неактивным
      // проверяем соответствие индекса и если совпадает с кликом меняем статус если счётчик сделать с 0 то получается по индексу будет опережать события
      state.data = state.data.map((element, index) => {
        return index === state.counter ? { ...element, status: true } : element;
      });
      // проверяем соответствие индекса и если совпадает с кликом меняем статус если счётчик сделать с 0 то получается по индексу будет опережать события
    },

    setPrev: (state) => {
      state.counter--;
      state.data = state.data.map((element) => {
        return { ...element, status: false };
      });
      state.data = state.data.map((element, index) => {
        return index === state.counter ? { ...element, status: true } : element;
      });
    },
  },
});

export const { setData, setNext, setPrev } = list.actions; //Экспортируем для диспатча

export default list.reducer; // Экспортируем для store
