import React from 'react'
import './button.css'

function button(props) {
  return (
    <div>
      <button className="main-btn"> {props.value} </button>
    </div>
  );
}

export default button