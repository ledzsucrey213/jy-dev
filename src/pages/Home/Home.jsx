// src/pages/Home.js
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css"; // si tu as du CSS

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
      <h1 className="slogan">{t.slogan}</h1>
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
    </div>
  );
};

export default Home;
