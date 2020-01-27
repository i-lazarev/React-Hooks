import React, { useState, useEffect } from "react";

export default function CounterHookLifeCycle() {
  const [counter, setCounter] = useState(0);
  const[name, setName] = useState("Ion")

  // componentDidMount & componentDidUpdate
  useEffect(() => {
      document.title = `Your counter is ${counter}`
  },[counter]);

  return (
    <div>
      <h2>CounterHookLifeCycle</h2>
      <p>Your counter is {counter}</p>
      <p>Your name is {name}</p>
      <button onClick={() => setCounter(prevState => prevState + 1)}>
        Icrement
      </button>
      <button onClick={() => setCounter(prevState => prevState - 1)}>
        Decrement
      </button>
      <button onClick = {() => setName("Ion Lazarev")}>Change to full  name</button>
    </div>
  );
}
