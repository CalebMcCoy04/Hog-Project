import React from 'react';
import { useState } from 'react'
import CSS from './App.css';

const Hogs = ({hogObj, removeHog}) => {
    const [partyTime, setPartyTime] = useState(false)
    const handleClick = () => {
        // !partyTime ? "party-time" : null;
        setPartyTime(!partyTime)
    }
    const handleDelete = () => {
        removeHog(hogObj)
        window.alert(`Do you really want to delete ${hogObj.species}`);
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
                <button className="party-time-button" onClick={handleClick}>🎉 time </button>
            </div>
        </div>
    )
}

export default Hogs 