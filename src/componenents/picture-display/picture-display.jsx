import React, { Component } from 'react'

import PictureItem from '../picture-item/picture-item'

import './picture-display.css'

class FoodDisplay extends Component {
  render() {
    return (
      <div className="pictureGrid">
        {this.props.photoArray.map(photo => {
          console.log(photo)
          return <PictureItem key={photo.link} photo={photo}/>
        })}
      </div>
    )
  }
}

export default FoodDisplay;