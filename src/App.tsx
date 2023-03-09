import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [resources, setResources] = useState('post')

  useEffect(()=>{
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
  },[resources])

  return (
    <div className="App">
      <button onClick={()=>setResources('post')}>Post</button>
      <button onClick={()=>setResources('users')}>Users</button>
      <button onClick={()=>setResources('comments')}>Comments</button>
      <h1>{resources}</h1>

    </div>
  );
}

export default App;
