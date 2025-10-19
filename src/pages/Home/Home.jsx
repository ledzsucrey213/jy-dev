// src/pages/Home.js
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css"; // si tu as du CSS
import logo from "../../assets/images/logo.png";

const Home = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      slogan: "Best Web Application Development Company in France",
    },
    fr: {
      slogan: "Les meilleurs du développement d'applications Web en France",
    },
  };

  const t = labels[language];

  return (
    <div className="hero-section">

      <div className="hero-content">
        <img src={logo} alt="JY Dev Logo" className="hero-logo" />
        <h1 className="slogan">{t.slogan}</h1>
      </div>

      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
    </div>
  );
};

export default Home;
