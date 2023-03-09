import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [resources, setResources] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resources])

  return (
    <div className="App">
      <div>
      <button onClick={()=>setResources('posts')}>Post</button>
      <button onClick={()=>setResources('users')}>Users</button>
      <button onClick={()=>setResources('comments')}>Comments</button>
      <h1>{resources}</h1>
      </div>
      <div>
      {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
      </div>

    </div>
  );
}

export default App;
