import React, { useState, useRef } from 'react';
import './HowItWorks.css';

const services = [
  'Classic Way 🛠️', //'Fonctionnement classique 🛠️',
  'Step by step 🔒',// 'Étape par étape 🔒',
  'Quick Launch Website ⚡', //'Site express ⚡',
  'Iterative Build 📈', //'Site évolutif 📈',
  'All-Inclusive Website 🎁', //'Site tout compris 🎁',
];
const serviceDetails = [
  {
    title: 'Classic Way 🛠️', //'Fonctionnement classique 🛠️',
    content: 'A clear and reliable approach, perfect for classic showcase websites. Each step is well-managed — from brief to launch — for a smooth and professional result.\\nClick here to see the details.',
            // 'Une approche simple et solide, parfaite pour les sites vitrines classiques. 
            // Chaque étape est maîtrisée, du brief à la mise en ligne, pour un rendu professionnel et à votre guise.\\Cliquez ici pour voir les détails.',
    link: '/details-1',
  },
  {
    title: 'Step by step 🔒',// 'Étape par étape 🔒'
    content: 'A step-by-step website build tailored to your pace and needs. Perfect to test an idea, scale gradually, or adjust your budget along the way.\\nClick here to see the details.',
            // 'Une construction étape par étape, selon votre rythme et vos besoins. 
            // Idéal pour tester une idée, avancer par blocs ou adapter son budget au fil du projet.\\Cliquez ici pour voir les détails.',  
    link: '/details-2',
  },
  {
    title: 'Quick Launch Website ⚡', //'Site express ⚡',
    content: 'A fast-deployment site delivered in 1 week for immediate online presence. Ideal for freelancers, small businesses, or urgent launches.\\nClick here to see the details.',
            // Un site rapide à déployer en 1 semaine, pour une présence en ligne immédiate.
            // Parfait pour les indépendants, petites structures ou lancements urgents.\\Cliquez ici pour voir les détails.',
    link: '/details-3',
  },
  {
    title: 'Iterative Build 📈', //'Site évolutif 📈',
    content: 'An agile method for projects that grow with you. We launch a first version (MVP), then improve it iteratively based on feedback and user needs.\\nClick here to see the details.',
            // 'Une méthode agile pour des projets qui grandissent avec vous. 
            // On lance une première version (MVP), puis on l’améliore de manière itérative selon les retours et besoins utilisateurs.\\Cliquez ici pour voir les détails.',
    link: '/details-4',
  },
  {
    title: 'All-Inclusive Website 🎁', //'Site tout compris 🎁',
    content: 'You don’t have to worry about a thing — we handle everything. Content, design, development, SEO... You get a ready-to-use website, polished from A to Z.\\nClick here to see the details.',
            // 'Vous n’avez rien à gérer, on s’occupe de tout. 
            // Contenu, design, développement, SEO... Vous recevez un site prêt à l’emploi, peaufiné de A à Z.\\Cliquez ici pour voir les détails.',
    link: '/details-5',
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleTagClick = (index) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
//Nos méthodes de travail
//Chaque projet est unique. C’est pourquoi nous proposons plusieurs façons de collaborer.  
//Que vous ayez besoin d’un site prêt en quelques jours, d’un accompagnement évolutif ou d’une prise en charge complète — nous avons LA méthode qui vous conviendra.  
//Découvrez nos différentes approches et choisissez celle qui correspond le mieux à votre rythme, vos objectifs et votre budget.

  return (
    <section className="how-container">
      <div className="how-intro">
  <h2 className="how-intro-title">Our Work Methods</h2>
  <p className="how-intro-text">
<p className="how-intro-text">
  Because every project is unique, we offer multiple ways of working.  
  Whether you're in a hurry to launch, need time to iterate, or want us to handle everything for you — we’ve got the workflow that fits you the best.  
  Take a look at our different approaches and choose the one that matches your rhythm, your goals, and your budget.
</p>

  </p>
</div>

      <div className="how-tags">
        {services.map((label, index) => (
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
        {serviceDetails.map((detail, index) => {
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
                <p className="how-description">
  {detail.content.split('\\n').map((line, idx) => {
    if (line.toLowerCase().includes('click here')) {
      const [before, after] = line.split(/click here/i);
      return (
        <span key={idx}>
          {before}
          <a href={detail.link} className="how-link">Click here</a>
          {after}
          <br />
        </span>
      );
    }
    return (
      <span key={idx}>
        {line}
        <br />
      </span>
    );
  })}
</p>


                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
