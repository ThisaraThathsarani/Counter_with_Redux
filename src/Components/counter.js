import React from 'react'
import { useSelector } from "react-redux"

function Counter() {
  const Counter = useSelector((state) => state.counter);

  return (
    <div className="counter">
      <h1>Counter: {Counter.count}</h1>
    </div>
  );
}

export default Counter;