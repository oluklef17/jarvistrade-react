import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import image from "../images/logo.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <Link to="/">
          <img
            id="logo"
            src={image}
            alt="Jarvistrade logo"
            width="100px"
            height="100px"
          />
        </Link>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <Link to="/">Home</Link>
        <div class="dropdown" id="market">
          <a href="shop.html" class="dropdown-toggle">
            Market
          </a>
          <div class="dropdown-menu market-options">
            <Link to="/market/indicators">Indicators</Link>
            <Link to="/market/bots">Bots</Link>
            <Link to="/market/scripts">Scripts</Link>
          </div>
        </div>
        <a href="custom.html">Custom</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
