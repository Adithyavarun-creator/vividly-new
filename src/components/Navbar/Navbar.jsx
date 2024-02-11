import React from "react";
import "./Navbar.css";
import WhiteLogo from "../../assets/blacklogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="linkstyle nav-img-box">
        <img src={WhiteLogo} className="vividlylogo" alt="" />
      </Link>
      <div className="nav-link-box">
        <li className="nav-link">L/D mode</li>
        <li className="nav-link">Pricing</li>
      </div>
    </nav>
  );
};

export default Navbar;
