import React from 'react';
import { useState } from 'react'
import CSS from './App.css'; 

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
  <div className="hog-form-div">
      <div className="form-title"> Add A New Hog </div>
      <form className= "hog-form" onSubmit={handleSubmit}>

        <div class="input-container n1">
            <input onChange={(e) => setNewHogObj({...newHogObj, habitat: e.target.value})} 
            name="habitat" type="text" value={newHogObj.habitat} placeholder="Habitat"/>
        </div>

        <div class="input-container n2">
            <input onChange={(e) => setNewHogObj({...newHogObj, Genus: e.target.value})}
            name="Genus" type="text" value={newHogObj.Genus} placeholder="Genus"/>
        </div>

        <div class="input-container n3">
            <input onChange={(e) => setNewHogObj({...newHogObj, value: e.target.value})}
            name="value" type="number" value={newHogObj.value} placeholder="Value"/>
        </div>

        <div class="input-container n4">
            <input onChange={(e) => setNewHogObj({...newHogObj, image: e.target.value})}
            name="image" type="text" value={newHogObj.image} placeholder="Image"/>
        </div>  

        <div class="input-container n5">
            <input onChange={(e) => setNewHogObj({...newHogObj, description: e.target.value})}
            name="description" type="text" value={newHogObj.description} placeholder="Description"/>
        </div> 
        <div class="input-container n6">
            <input onChange={(e) => setNewHogObj({...newHogObj, species: e.target.value})}
            name="species" type="text" value={newHogObj.species} placeholder="Species"/>
        </div>    

            <button className="form-button" type="submit"> New Hog </button>
      </form>
  </div>
      )
}

export default HogsForm;

{/* <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</>
      </div>
      <button type="text" class="submit">submit</button>
    </div> */}