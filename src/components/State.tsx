import React, { useState, useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let b = "123";

  useEffect(() => {
    console.log("update");
    let a = 5;
  }, [b]);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h2>Window Width:{windowWidth}</h2>
      <button
        onClick={() => {
          b = "456";
        }}
      >
        click
      </button>
      <button onClick={() => setState(state - 1)}>-</button>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
};

export default State;
