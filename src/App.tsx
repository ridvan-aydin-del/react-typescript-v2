import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  function decermement() {
    setCount(prevCount => prevCount - 1);
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <button onClick={decermement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
