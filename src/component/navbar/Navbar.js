import { Link } from "react-router-dom";
import './navbar.css'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">

    <div className="logo">8TIES</div>

        <ul>
            <Link to="/8ties-restaurant-app" className="link"><li>Home</li></Link>
            <Link to="/8ties-restaurant-app/about" className="link"><li>About</li></Link>
            <Link to="/8ties-restaurant-app/products" className="link"><li>Products</li></Link>
            <Link to="/8ties-restaurant-app/contact" className="link"><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar