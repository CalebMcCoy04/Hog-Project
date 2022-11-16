import React from 'react';
import CSS from './App.css';

const Hogs = ({hogObj, removeHog}) => {

    const handleDelete = () => {
        removeHog(hogObj)
        window.alert(`Do you really want to delete ${hogObj.species}`);
    }

    return (
        <div className="card-container">
            <div className="card">
                <img className="image"src={hogObj.image} alt={hogObj.description}/>
                <div className='title'><h2> {hogObj.species} </h2></div>
                <div className='title'><h3> {hogObj.Genus} </h3></div>
                <div className='p'><p className= "hog-description" >{hogObj.description}</p></div>
                <div className='p'><p> {hogObj.habitat}</p></div>
                <button onClick={handleDelete} className="delete-button-hogs">DELETE</button>
                <button>🎉 time </button>
            </div>
        </div>
    )
}

export default Hogs 