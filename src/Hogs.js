import React from 'react';

const Hogs = ({hogObj, removeHog}) => {

    const handleDelete = () => {
        removeHog(hogObj)
    }

    return (
        <div className="hog">
            <img className= "hog-images" src={hogObj.image} alt={hogObj.description}/>
            <div className="hog-info">
            <h1> {hogObj.species} </h1>
            <h2> {hogObj.Genus} </h2>
            <p className= "hog-description" >{hogObj.description}</p>
            <p> {hogObj.habitat}</p>
            <button onClick={handleDelete} className="delete-button-hogs">DELETE</button>
            </div>
        </div>
    )
}

export default Hogs 