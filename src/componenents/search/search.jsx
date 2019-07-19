import React, { Component } from 'react';

import './search.css';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchValue: ''
        }
    }

    // handler for input field
    searchEventHandler = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.searchEventHandler}/>
                <button >Search Food</button>
            </div>
        )
    }
}

export default Search;
