import React from 'react'
import { Link } from "react-router-dom";
import './home.css'
import Button from '../../component/button/Button'

function Home() {
  return (
    <div className="homepage">
      <div className="main">
        {/* <p>Welcome to</p> */}
        <h1>
          <p>Welcome to</p> 8TIES
        </h1>
        <Link to="/8ties-restaurant-app/products" className="link">
          <Button value="Order Now!😉" />
        </Link>
        {/* <p>"People who love to eat are always the best people."</p> */}
      </div>
    </div>
  );
}

export default Home