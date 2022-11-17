import React, { useState, useRef } from 'react';
import CSS from './App.css';
// import summer from "./src/assets/sumer-house-party-8849.mp3"

const Hogs = ({hogObj, removeHog}) => {

    const [ partyTime, setPartyTime ] = useState(false)

    const handleDelete = () => {
        removeHog(hogObj)
        window.confirm(`Do you really want to delete ${hogObj.species}`);
    }
    // const partyHardy = useRef(new Audio(summer));
    const handlePartyClick  = () => {
        if (!partyTime) {
            document.body.classList.add("party-time");
          } else {
            document.body.classList.remove("party-time");
          }
        setPartyTime(!partyTime)
    }

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-image"src={hogObj.image} alt={hogObj.description}/>
                <div className='title'><h2>{hogObj.species}</h2></div>
                <div className='title'><h3><strong>Genus: </strong> {hogObj.Genus} </h3></div>
                <div className='p'><p className= "hog-description" >{hogObj.description}</p></div>
                <div className='p'><p><strong>Habitat:</strong> {hogObj.habitat}</p></div>
                <button onClick={handleDelete} className="delete-button-hogs">DELETE</button>
            </div>
            <div className="party-button-container">
                <button onClick={handlePartyClick} className="party-button">🎉 PARTY TIME 🎉</button>
            </div>
        </div>
        
    )
}

export default Hogs 