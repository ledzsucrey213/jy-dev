import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const labels = {
    fr: {
      services: "Services",
      how: "Comment ça marche",
      about: "À propos",
      contact: "Contact",
    },
    en: {
      services: "Services",
      how: "How it works",
      about: "About",
      contact: "Contact",
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo">
        <div className="logo-circle">JY's</div>
        <span className="logo-text">DEV</span>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link to="/services" className="nav-link">
            {labels[language].services}
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link to="/how-it-works" className="nav-link">
            {labels[language].how}
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link to="/about" className="nav-link">
            {labels[language].about}
          </Link>
        </li>

        {/* Contact + Langue pour mobile */}
        <li className="nav-mobile-extra">
          <Link
            to="/contact"
            className="contact-button"
            onClick={() => setIsMenuOpen(false)}
          >
            {labels[language].contact}
          </Link>
          <div
            className="lang-switch"
            onClick={toggleLanguage}
            style={{ cursor: "pointer", marginTop: "10px" }}
          >
            <span className={language === "fr" ? "active-lang" : ""}>FR</span> |{" "}
            <span className={language === "en" ? "active-lang" : ""}>EN</span>
          </div>
        </li>
      </ul>

      {/* Desktop seulement */}
      <div className="nav-right">
        <Link
          to="/contact"
          className="contact-button"
          onClick={() => setIsMenuOpen(false)}
        >
          {labels[language].contact}
        </Link>
        <div
          className="lang-switch"
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        >
          <span className={language === "fr" ? "active-lang" : ""}>FR</span> |{" "}
          <span className={language === "en" ? "active-lang" : ""}>EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
