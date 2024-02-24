import { useReducer, useState } from "react";

import "./App.css";

function reducer(count, action) {
  if (action.type === "increment") {
    count = count + 1;
  }
  if (action.type === "decrement") {
    count = count - 1;
  }

  return count; // should always return the state
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </>
  );
}

export default App;
