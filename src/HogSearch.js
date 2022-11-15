import React, {useState} from 'react';


const HogSearch =  ({searchText, setSearchText}) => {
    
    return ( 
    <div>
        <input value={searchText} onChange={e=> setSearchText(e.target.value)} 
               className="search-input" type="text" id="search" placeholder="Search me..." />
    </div>
    )

}



export default HogSearch;