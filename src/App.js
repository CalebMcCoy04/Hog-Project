import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [ pigsData, setPigsData ] = useState([])
   useEffect(() => {
      fetch("http://localhost:3002/pigs")
      .then(r => r.json())
      .then(arrayOfPigs => 
        setPigsData(arrayOfPigs)
       
        )
   },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={pigsData[9].image} className="App-logo" alt="logo" />
        <a
          className="App-link"
          
          target="_blank"
          
        >
          <button>HOGS!</button>
        </a>
      </header>
    </div>
  );
}

export default App;
