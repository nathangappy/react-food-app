import React, { Component } from 'react';

import Header from './componenents/header/header';
import PictureDisplay from './componenents/picture-display/picture-display';

import './App.css';

import $ from 'jquery';

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchValue: '',
      photoArray: [],
      api: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
    }
  }

  // handler for input field
  searchEventHandler = (e) => {
    this.setState({
        searchValue: e.target.value
    })
  }


  // handle submitted search
  searchFoodHandler  = async () => {
    this.setState({searchValue: ''})
    let data = await $.getJSON(this.state.api, {
      tags: this.state.searchValue,
      tagmode: "any",
      format: "json"
    })

    let photoArray = await data.items.map(item => {
      return item;
    })

    this.setState({ photoArray: photoArray})
  }

  render() {
    return (
      <main>
        <Header 
          searchEventHandler={this.searchEventHandler} 
          searchFoodHandler={this.searchFoodHandler} />
        <PictureDisplay 
          photoArray={this.state.photoArray} />
      </main>
    )
  }
}

export default App;

// bc290dfd79f75d1915e8f848bcce299d - api key
// 8872d2102f49b7af- secret
