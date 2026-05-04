import { counterActions } from "./counterActions";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case counterActions.increment().type:
      return state + 1;
    case counterActions.decrement().type:
      return state - 1;
    case counterActions.reset().type:
      return 0;
    case counterActions.incrementByAmount().type:
      return state + action.payload;
    case counterActions.decrementByAmount().type:
      return state - action.payload;
    default:
      throw new Error("Unknown action type");
  }
};
