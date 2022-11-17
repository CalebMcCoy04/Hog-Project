// import React from 'react';


const HogSearch =  ({searchText, setSearchText}) => {
    
    return ( 
    <form className="search-form">
        {/* <div className="search-bar"> */}
            <label className="search-label"for="search">Search Me..</label>
            <input value={searchText} onChange={e=> setSearchText(e.target.value)} 
                className="search-input" type="text" id="search" placeholder="Search me..." />
                <span className="caret"></span>
        {/* </div> */}
    </form>    
    )

}



export default HogSearch;