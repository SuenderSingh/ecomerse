import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  return (
    <>
      <div style={{ fontSize: 25 }}> {count} </div>
      <div style={{ display: "inline-flex" }}>
        <button
          onClick={() => {
            setCount(count + 2);
          }}
        >
          Add2{" "}
        </button>
        <button
          onClick={() => {
            setCount(count * count);
          }}
        >
          Square{" "}
        </button>
        <button
          onClick={() => {
            setCount(count + count);
          }}
        >
          Double{" "}
        </button>
        <button
          onClick={() => {
            setCount(count - 2);
          }}
        >
          Sub 2{" "}
        </button>
        <button
          onClick={() => {
            setCount(10);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
