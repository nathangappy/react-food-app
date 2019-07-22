import React from 'react'

import './picture-item.css'

const FoodItem = (props) => (
  <div className="pictureItem">
    <p>{props.photo.title}</p>
    <img src={props.photo.media.m} alt=''/>
  </div>
)

export default FoodItem;