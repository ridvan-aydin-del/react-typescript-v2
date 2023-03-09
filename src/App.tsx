import React, { useState,useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const renderCount = React.useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  

  return (
    <div className="App">
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}

export default App;
