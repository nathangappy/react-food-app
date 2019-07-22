import React from 'react';

import './search.css';

const Search = (props) => (
    <div className="search">
        <input type="text" 
            onChange={props.searchEventHandler}/>
        <button 
            onClick={props.searchFoodHandler}>
            Search Food
        </button>
    </div>
)


export default Search;
