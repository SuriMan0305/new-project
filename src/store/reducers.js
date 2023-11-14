import { LOAD_DATA, NEXT_BUTTON, PREV_BUTTON } from "./constants";

const initialState = {
  allData: [
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
  needData: {},
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      const { id, content } = action.payload;

      return {
        ...state,
        allData: [...state.allData, id],
        needData: {
          ...state.needData,
          [id]: {
            content,
            status: false,
          },
        },
      };
    }

    case NEXT_BUTTON: {
      const { id } = action.payload;
      const targetItem = state.needData[id];
      console.log(action);
      return {
        ...state,

        needData: {
          ...state.needData,
          [id]: {
            ...targetItem,
            status: !targetItem.id,
          },
        },
      };
    }

    case PREV_BUTTON: {
      const { id } = action.payload;
      const targetItem = state.needData[id];
      return {
        ...state,

        needData: {
          ...state.needData,
          [id]: {
            ...targetItem,
            status: !targetItem.id,
          },
        },
      };
    }

    default:
      return state;
  }
}
