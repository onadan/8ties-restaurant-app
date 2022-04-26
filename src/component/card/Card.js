import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.pics} alt={props.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text lead">{props.description}</p>
        <h6 className="card-text lead">{props.price}</h6>
        {/* // eslint-disable-next-line */}

        <div className='d-grid bottom-0'>
          <button href="#" className="btn btn-secondary btn-lg w-auto center h1">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card