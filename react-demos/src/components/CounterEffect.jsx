import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter ${counter}`;
  }, [counter])

  const handleClick = () => {
    setCounter(counter + 1);
  }

  return (
    <button onClick={handleClick}>Increment</button>
  )
}

export default CounterEffect