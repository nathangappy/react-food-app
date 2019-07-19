import React from 'react';

import Search from '../search/search';

import './header.css';

const Header = () => (
    <header className="headerComponent">
        <h1>Food App</h1>
        <Search />
    </header>
)

export default Header;

