import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])
  
  return (
    <div>
      {windowWidth}
      <br />
      {windowHeight}
    </div>
  );
}

export default App;
