import { useState } from "react";

const JSExpressions = () => {
  const name = "React";
  const count = 42;
  const isVisible = true;
  const items = ["apple", "banana", "orange"];
  const [randomId] = useState(() => Math.random().toFixed(2));

  return (
    <div>
      <h1>JS Expressions in JSX</h1>

      {/* String interpolation */}
      <p>Hello, {name}!</p>

      {/* Math expressions */}
      <p>2 + 2 = {2 + 2}</p>
      <p>Count: {count}</p>

      {/* Ternary operator */}
      <p>{isVisible ? "Visible" : "Hidden"}</p>

      {/* Logical AND */}
      <p>{count > 0 && "Count is positive"}</p>

      {/* Function call */}
      <p>Uppercase: {name.toUpperCase()}</p>

      {/* Array method */}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Object property access */}
      <p>ID: {randomId}</p>
    </div>
  );
};

export default JSExpressions;
