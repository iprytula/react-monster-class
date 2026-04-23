export const counterActions = {
  increment: () => ({ type: "increment" }),
  decrement: () => ({ type: "decrement" }),
  reset: () => ({ type: "reset" }),
  incrementByAmount: (amount) => ({ type: "incrementByAmount", payload: amount }),
  decrementByAmount: (amount) => ({ type: "decrementByAmount", payload: amount }),
};