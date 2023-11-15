import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src={process.env.PUBLIC_URL + "Navbar/Logo.png"}
      ></img>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Product</li>
        <li>Faq</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
