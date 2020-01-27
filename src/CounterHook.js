import React, { useState } from "react";

export default function CounterHook() {
  const [counter, setCounter] = useState(0);
  //we will have a state called counter
  //we will have a function to increment it
  //useState will set the counter to initial value 0
  return (
    <div>
      <h2>Hook Counter</h2>
      <p>Your counter is {counter}</p>
      <button onClick={() => setCounter(prevState => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(prevState => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
}
