export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "incrementByAmount":
      return state + action.payload;
    case "decrementByAmount":
      return state - action.payload;
    default:
      throw new Error("Unknown action type");
  }
};
