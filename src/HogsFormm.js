import React from 'react';
import { useState } from 'react'

const HogsForm = ({hogsData, setHogsData}) => {
	const [newHogObj, setNewHogObj] = useState(
        {
          habitat: "",
          Genus: "",
          value: 0,
          image: "",
          description: "",
          species: "",
      })
      
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/pigs', {
          method: "POST",
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify( newHogObj )
        })
        .then(r => r.json())
        .then(newObj => {
          setHogsData([...hogsData, newObj])
        })
      }


    return (
    <div className="hog-form">
        <h1> Add A New Hog </h1>
        <form onSubmit={handleSubmit}>

            <input onChange={(e) => setNewHogObj({...newHogObj, habitat: e.target.value})} 
            name="habitat" type="text" value={newHogObj.habitat} placeholder="Habitat"/>

            <input onChange={(e) => setNewHogObj({...newHogObj, Genus: e.target.value})}
            name="Genus" type="text" value={newHogObj.Genus} placeholder="Genus"/>

            <input onChange={(e) => setNewHogObj({...newHogObj, value: e.target.value})}
            name="value" type="number" value={newHogObj.value} placeholder="Value"/>

            <input onChange={(e) => setNewHogObj({...newHogObj, image: e.target.value})}
            name="image" type="text" value={newHogObj.image} placeholder="Image"/>

            <input onChange={(e) => setNewHogObj({...newHogObj, description: e.target.value})}
            name="description" type="text" value={newHogObj.description} placeholder="Description"/>

            <input onChange={(e) => setNewHogObj({...newHogObj, species: e.target.value})}
            name="species" type="text" value={newHogObj.species} placeholder="Species"/>
            
            <button type="submit"> New Hog </button>
        </form>
    </div>
      )
}

export default HogsForm;