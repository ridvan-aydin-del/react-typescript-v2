import React, { useState,useEffect,useRef } from 'react';

export function App() {
  const [name, setName] = useState('');
  const inputRef =  React.createRef<HTMLInputElement>();
  
  function focus(){
    inputRef.current?.focus();
  }

  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
