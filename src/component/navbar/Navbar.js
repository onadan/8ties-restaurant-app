import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Restaurant kitchen</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? " links-container show-container" : "links-container "
          }`}
        >
          <ul className="links">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
