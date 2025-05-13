import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    fr: { services: "Services", how: "Comment ça marche", about: "À propos", contact: "Contact" },
    en: { services: "Services", how: "How it works", about: "About", contact: "Contact" },
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-circle">JY's</div>
        <span className="logo-text">DEV</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/services" className="nav-link">{labels[language].services}</Link></li>
        <li><Link to="/how-it-works" className="nav-link">{labels[language].how}</Link></li>
        <li><Link to="/about" className="nav-link">{labels[language].about}</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="/contact">
          <button className="contact-button">{labels[language].contact}</button>
        </Link>
        <div className="lang-switch" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
          <span className={language === "fr" ? "active-lang" : ""}>FR</span> | <span className={language === "en" ? "active-lang" : ""}>EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
