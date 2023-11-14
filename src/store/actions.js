import {LOAD_DATA, NEXT_BUTTON, PREV_BUTTON } from './constants'

let idCounter = 0;

export const loadList = (data) => ({
  type: LOAD_DATA,
  payload: {
    id: ++idCounter,
    content: data,
    status: false,
  }
});

export const nextItem = (id) => ({
  type: NEXT_BUTTON,
  payload: { id },
});

export const prevItem = (id) => ({
  type: PREV_BUTTON,
  payload: { id },
});