import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.pics} alt={props.name} width={"250px"} />
      </div>
      <div className='card-text-box'>
      <div className="card-name"> {props.name} </div>
      <div className="card-description"> {props.description} </div>
      <div className="card-price"> {props.price} </div>
      </div>
    </div>
  );
}

export default Card