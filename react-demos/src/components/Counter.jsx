import { useEffect, useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { counterActions } from "./counterActions";

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  useEffect(() => {
    console.log("Counter updated:", count);
  }, [count]);

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
      <form
        onSubmit={(e) =>
          e.preventDefault() ||
          dispatch(counterActions.incrementByAmount(parseInt(e.target.amount.value)))
        }
      >
        <input type="number" name="amount" placeholder="Amount to increment" />
        <button type="submit">Increment by Amount</button>
      </form>
      <form
        onSubmit={(e) =>
          e.preventDefault() ||
          dispatch(counterActions.decrementByAmount(parseInt(e.target.amount.value)))
        }
      >
        <input type="number" name="amount" placeholder="Amount to decrement" />
        <button type="submit">Decrement by Amount</button>
      </form>
    </div>
  );
};

export default Counter;
