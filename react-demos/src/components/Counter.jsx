import React from "react";
import { counterReducer } from "./counterReducer";

const Counter = () => {
  const [count, dispatch] = React.useReducer(counterReducer, 0);

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <form
        onSubmit={(e) =>
          e.preventDefault() ||
          dispatch({
            type: "incrementByAmount",
            payload: parseInt(e.target.amount.value),
          })
        }
      >
        <input type="number" name="amount" placeholder="Amount to increment" />
        <button type="submit">Increment by Amount</button>
      </form>
      <form
        onSubmit={(e) =>
          e.preventDefault() ||
          dispatch({
            type: "decrementByAmount",
            payload: parseInt(e.target.amount.value),
          })
        }
      >
        <input type="number" name="amount" placeholder="Amount to decrement" />
        <button type="submit">Decrement by Amount</button>
      </form>
    </div>
  );
};

export default Counter;
