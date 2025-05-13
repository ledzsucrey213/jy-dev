import React, { useState, useRef } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import './HowItWorks.css';

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

const serviceDetails = {
  fr: [
    {
      title: 'Fonctionnement classique 🛠️',
      content: 'Une approche simple et solide, parfaite pour les sites vitrines classiques. Chaque étape est maîtrisée, du brief à la mise en ligne, pour un rendu professionnel et à votre guise. <a href="/process/classic" class="how-link">Cliquez ici pour voir les détails.</a>',
    },
    {
      title: 'Étape par étape 🔒',
      content: 'Une construction étape par étape, selon votre rythme et vos besoins. Idéal pour tester une idée, avancer par blocs ou adapter son budget au fil du projet. <a href="/process/step-by-step" class="how-link">Cliquez ici pour voir les détails.</a>',
    },
    {
      title: 'Site express ⚡',
      content: 'Un site rapide à déployer en 1 semaine, pour une présence en ligne immédiate. Parfait pour les indépendants, petites structures ou lancements urgents. <a href="/process/express" class="how-link">Cliquez ici pour voir les détails.</a>',
    },
    {
      title: 'Site évolutif 📈',
      content: 'Une méthode agile pour des projets qui grandissent avec vous. On lance une première version (MVP), puis on l’améliore de manière itérative selon les retours et besoins utilisateurs. <a href="/process/iterative" class="how-link">Cliquez ici pour voir les détails.</a>',
    },
    {
      title: 'Site tout compris 🎁',
      content: 'Vous n’avez rien à gérer, on s’occupe de tout. Contenu, design, développement, SEO... Vous recevez un site prêt à l’emploi, peaufiné de A à Z. <a href="/process/all-inclusive" class="how-link">Cliquez ici pour voir les détails.</a>',
    },
  ],
  en: [
    {
      title: 'Classic Way 🛠️',
      content: 'A clear and reliable approach, perfect for classic showcase websites. Each step is well-managed — from brief to launch — for a smooth and professional result. <a href="/process/classic" class="how-link">Click here to see the details.</a>',
    },
    {
      title: 'Step by step 🔒',
      content: 'A step-by-step website build tailored to your pace and needs. Perfect to test an idea, scale gradually, or adjust your budget along the way. <a href="/process/step-by-step" class="how-link">Click here to see the details.</a>',
    },
    {
      title: 'Quick Launch Website ⚡',
      content: 'A fast-deployment site delivered in 1 week for immediate online presence. Ideal for freelancers, small businesses, or urgent launches. <a href="/process/express" class="how-link">Click here to see the details.</a>',
    },
    {
      title: 'Iterative Build 📈',
      content: 'An agile method for projects that grow with you. We launch a first version (MVP), then improve it iteratively based on feedback and user needs. <a href="/process/iterative" class="how-link">Click here to see the details.</a>',
    },
    {
      title: 'All-Inclusive Website 🎁',
      content: 'You don’t have to worry about a thing — we handle everything. Content, design, development, SEO... You get a ready-to-use website, polished from A to Z. <a href="/process/all-inclusive" class="how-link">Click here to see the details.</a>',
    },
  ],
};

export default function HowItWorks() {
  const { language } = useLanguage(); // Utilisation du contexte de langue
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleTagClick = (index) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
            ? 'Chaque projet est unique. C’est pourquoi nous proposons plusieurs façons de collaborer. Que vous ayez besoin d’un site prêt en quelques jours, d’un accompagnement évolutif ou d’une prise en charge complète — nous avons LA méthode qui vous conviendra. Découvrez nos différentes approches et choisissez celle qui correspond le mieux à votre rythme, vos objectifs et votre budget.' 
            : 'Because every project is unique, we offer multiple ways of working. Whether you\'re in a hurry to launch, need time to iterate, or want us to handle everything for you — we’ve got the workflow that fits you the best. Take a look at our different approaches and choose the one that matches your rhythm, your goals, and your budget.'}
        </p>
      </div>

      <div className="how-tags">
        {services[language].map((label, index) => (
          <button
            key={index}
            className={`how-tag ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTagClick(index)}
          >
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="how-details">
        {serviceDetails[language].map((detail, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`how-item ${isActive ? 'open' : ''}`}
            >
              <div className="how-header">
                <div className="how-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="how-title">{detail.title}</h3>
                <button
                  className={`how-toggle ${isActive ? 'rotated' : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-label="Toggle section"
                >
                  <svg
                    className={`how-icon ${isActive ? 'white' : ''}`}
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </button>
              </div>
              <div className={`how-content-wrapper ${isActive ? 'open' : ''}`}>
                <div className="how-content-inner">
                  <p className="how-description" dangerouslySetInnerHTML={{ __html: detail.content }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
