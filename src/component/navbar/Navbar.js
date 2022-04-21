import { Link } from "react-router-dom";
import './navbar.css'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar">

    <div className="logo">LOGO</div>

        <ul>
            <Link to="/" className="link"><li>Home</li></Link>
            <Link to="/about" className="link"><li>About</li></Link>
            <Link to="/products" className="link"><li>Products</li></Link>
            <Link to="/contact" className="link"><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar