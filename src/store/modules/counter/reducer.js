import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      if (state < 20) {
        return state + action.payload;
      }
      return state;

    case SUB_NUMBER:
      if (state > -10) {
        return state - action.payload;
      }
      return state;

    default:
      return state;
  }
};

export default reducerCounter;
