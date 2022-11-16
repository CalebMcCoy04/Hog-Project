// import React from 'react';


const HogSearch =  ({searchText, setSearchText}) => {
    
    return ( 
    <div className="search-bar">
        <h2>SearchBar</h2>
        <input value={searchText} onChange={e=> setSearchText(e.target.value)} 
               className="search-input" type="text" id="search" placeholder="Search me..." />
    </div>
    )

}



export default HogSearch;