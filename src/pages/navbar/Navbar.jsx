import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-circle">JY's</div>
        <span className="logo-text">DEV</span>
      </div>

      {/* Liens de navigation */}
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Services ▾</Link></li>
        <li><Link to="/how-it-works" className="nav-link">How it works ▾</Link></li>
        <li><Link to="/about" className="nav-link">About ▾</Link></li>
      </ul>

      {/* Bouton contact et langue */}
      <div className="nav-right">
        <Link to="/contact">
          <button className="contact-button">contact</button>
        </Link>
        <div className="lang-switch">
          <span className="active-lang">FR</span> | <span>EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
