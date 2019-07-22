import React from 'react';

import Search from '../search/search';

import './header.css';

const Header = (props) => {
    return (
        <header className="headerComponent">
            <h1>Picture Viewer</h1>
            <p>Search for pictures from Flickr's photo database</p>
            <Search 
                searchEventHandler={props.searchEventHandler}
                searchFoodHandler={props.searchFoodHandler}/>
        </header>
    )
}

export default Header;

