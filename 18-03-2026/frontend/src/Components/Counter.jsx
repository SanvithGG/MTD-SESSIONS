import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button onClick={incrementCounter}>Increment + 1</button>
      <button onClick={decrementCounter}>Decrement - 1</button>
    </div>
  );
}
export default Counter;