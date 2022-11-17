import React, { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom'

import HogsContainer from "./HogsContainer";
import HogSearch from "./HogSearch";
import HogsForm from "./HogsFormm";
import NavBar from "./NavBar";

function App() {
  const [ hogsData, setHogsData ] = useState([])
   useEffect(() => {
      fetch("http://localhost:3002/pigs")
      .then(r => r.json())
      .then(arrayOfHogs=> 
        setHogsData(arrayOfHogs)
       
        )
   	},[])
    console.log(hogsData)

	const [searchText, setSearchText]= useState("")
  	const filterHogsData = hogsData.filter((hogsObj => {
 		return hogsObj.species.toLowerCase().includes(searchText.toLowerCase())   
  		}))
  
  const removeHog = removedHog => {
    const newHog = hogsData.filter(hogObj => {
        return removedHog.id !== hogObj.id
      })
      setHogsData(newHog)
    fetch(`http://localhost:3002/pigs/${removedHog.id}`, {method: "DELETE"} )
    }

  return (
    
    
    <div className="App">
      <NavBar/>
        <Switch>


          <Route exact path="/HogSearch" >
            <HogSearch searchText={searchText} setSearchText={setSearchText}/>
            <HogsContainer removeHog={removeHog} hogsData={filterHogsData}/>
          </Route>

          <Route exact path="/HogsContainer" >
            <HogsContainer removeHog={removeHog} hogsData={filterHogsData}/>
          </Route>
          <Route exact path="/HogsForm">
            <HogsForm hogsData={hogsData} setHogsData={setHogsData}/>  
            <HogsContainer removeHog={removeHog} hogsData={filterHogsData}/>
          </Route>
        
        </Switch>
        
      </div>
  );
}

export default App;
