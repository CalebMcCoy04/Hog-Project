import React, { useEffect, useState } from "react";
import HogsContainer from "./HogsContainer";
import HogSearch from "./HogSearch";

function App() {
  const [ hogsData, setHogsData ] = useState([])
   useEffect(() => {
      fetch("http://localhost:3002/pigs")
      .then(r => r.json())
      .then(arrayOfHogs=> 
        setHogsData(arrayOfHogs)
       
        )
   },[])
	const [searchText, setSearchText]= useState("")
	const filterHogsData = hogsData.filter((hogsObj => {
 		return hogsObj.species.toLowerCase().includes(searchText.toLowerCase())   
  }))
  
  return (
    <div className="App">
      <header className="App-header">
        The National Hog Encyclopedia
      </header>
      <HogsContainer hogsData={filterHogsData}/>
      <HogSearch searchText={searchText} setSearchText={setSearchText}/>
    </div>
  );
}

export default App;
