import { useReducer } from "react";
import { counterReducer } from "../counter-reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => dispatch({ type: "INCREMENT" });

  const decrement = () => dispatch({ type: "DECREMENT" })

  return (
    <div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <div>{state.count}</div>
    </div>
  )
}

export default Counter