import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import './HowItWorks.css';

// Importe le contenu des méthodes (on reprend ce que tu avais dans les fichiers Process)
import processContents from './processContents';

const services = {
  fr: [
    'Fonctionnement classique 🛠️',
    'Étape par étape 🔒',
    'Site express ⚡',
    'Site évolutif 📈',
    'Site tout compris 🎁',
  ],
  en: [
    'Classic Way 🛠️',
    'Step by step 🔒',
    'Quick Launch Website ⚡',
    'Iterative Build 📈',
    'All-Inclusive Website 🎁',
  ],
};

export default function HowItWorks() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  // ✅ Scroll automatique vers la section ouverte
  useEffect(() => {
    if (activeIndex !== null && sectionRefs.current[activeIndex]) {
      const element = sectionRefs.current[activeIndex];
      const yOffset = -120; // 🔧 ajuste cette valeur selon la hauteur de ta navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 150); // laisse le temps au DOM de s'afficher
    }
  }, [activeIndex]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="how-container">
      <div className="how-intro">
        <h2 className="how-intro-title">
          {language === 'fr' ? 'Nos méthodes de travail' : 'Our Work Methods'}
        </h2>
        <p className="how-intro-text">
          {language === 'fr'
            ? "Chaque projet est unique. C’est pourquoi nous proposons plusieurs façons de collaborer. Découvrez nos approches et choisissez celle qui correspond à votre rythme et vos besoins."
            : "Each project is unique — that’s why we offer several collaboration methods. Discover the one that fits your goals and workflow."}
        </p>
      </div>

      <div className="how-tags">
        {services[language].map((label, index) => (
          <button
            key={index}
            className={`how-tag ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="how-details">
        {services[language].map((label, index) => {
          const isActive = activeIndex === index;
          const processKey = [
            'classic',
            'step-by-step',
            'express',
            'iterative',
            'all-inclusive',
          ][index];

          const data = processContents[processKey][language];

          return (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`how-item ${isActive ? 'open' : ''}`}
            >
              <div className="how-header" onClick={() => handleToggle(index)}>
                <div className="how-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="how-title">{label}</h3>
                <button
                  className={`how-toggle ${isActive ? 'rotated' : ''}`}
                  aria-label="Toggle section"
                >
                  <svg
                    className={`how-icon ${isActive ? 'white' : ''}`}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </button>
              </div>

              {isActive && (
                <div className="how-content-wrapper open">
                  <h4 className="process-mini-title">{data.title}</h4>
                  {data.steps.map((step, i) => (
                    <div key={i} className="process-mini-step">
                      <h5 className="process-mini-subtitle">{step.title}</h5>
                      <p className="process-mini-desc">{step.desc}</p>
                      <p className="process-mini-notes">{step.notes}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
