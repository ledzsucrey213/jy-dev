import React from 'react';
import './process.css';

/*
👤 0. Client Information
Objectif : partir sur une meme base.
Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.

[
  {
    title: '🧭 Étape 1 — Découverte',
    desc: 'Comprendre le projet, la cible et les attentes.',
    notes: `Nous explorons ensemble les objectifs du site, son public cible et vos attentes globales. C’est une vue d’ensemble essentielle pour bien démarrer.`,
  },
  {
    title: '📝 Étape 2 — Création de contenu',
    desc: 'Préparer les textes, les visuels et les éléments légaux.',
    notes: `Nous rassemblons tous les contenus nécessaires : textes, images, mentions légales ou autres documents clés.`,
  },
  {
    title: '🎨 Étape 3 — Design',
    desc: 'Fournir des maquettes validées et une identité visuelle claire.',
    notes: `Je conçois le design du site sur la base de votre image de marque et du contenu fourni. Les maquettes sont validées ensemble.`,
  },
  {
    title: '💻 Étape 4 — Développement',
    desc: 'Créer un site complet, optimisé et conforme RGPD.',
    notes: `Je développe le site techniquement, intègre les outils nécessaires, et veille à la performance, au SEO et à la conformité légale.`,
  },
  {
    title: '🚀 Étape 5 — Livraison',
    desc: 'Mettre en ligne et fournir un accès complet avec accompagnement.',
    notes: `Le site est mis en ligne et je vous remets tous les accès ainsi qu’un accompagnement pour vous permettre de l’utiliser en toute autonomie.`,
  },
  {
    title: '🔄 Étape 6 — Maintenance (optionnelle)',
    desc: 'Maintenir le site sécurisé, à jour et fonctionnel dans le temps.',
    notes: `Si vous le souhaitez, je propose une maintenance mensuelle : mises à jour, sauvegardes et assistance technique.`,
  },
]
*/

export default function ProcessAllInclusive() {
  const steps = [
    {
      title: '👤 0. Client Information',
      desc: " Start on the same page.",
      notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
    },
    {
    title: '🧭 Step 1 — Discovery',
    desc: 'Understand the project, target and expectations.',
    notes: `We start by exploring your project's scope, who it serves, and what outcome you're aiming for. This step gives us the big picture.`,
  },
  {
    title: '📝 Step 2 — Content Creation',
    desc: 'Prepare texts, images and legal information.',
    notes: `Together, we gather all the content needed for your site, including copywriting, visuals, and legal notices if required.`,
  },
  {
    title: '🎨 Step 3 — Design',
    desc: 'Deliver validated mockups and branding.',
    notes: `I craft a design based on your identity and content. We validate the visuals together before moving forward.`,
  },
  {
    title: '💻 Step 4 — Development',
    desc: 'Build a complete, optimized and GDPR-compliant site.',
    notes: `I code the site, connect all necessary tools, and ensure performance, SEO and GDPR standards are met.`,
  },
  {
    title: '🚀 Step 5 — Delivery',
    desc: 'Launch and give full access with training.',
    notes: `Once live, you get all access credentials, documentation, and a walkthrough session so you're fully autonomous.`,
  },
  {
    title: '🔄 Step 6 — Maintenance (optional)',
    desc: 'Keep the website secure, updated and supported over time.',
    notes: `Optionally, I can provide monthly updates, technical support, and backups for long-term peace of mind.`,
  },
  ];

  return (
    <div className="process-page">
      <h1 className="process-title">'All-Inclusive Website 🎁'</h1>

      {steps.map((step, index) => (
        <section className="process-section" key={index}>
          <h2 className="process-subtitle">{step.title}</h2>
          <p className="process-desc">{step.desc}</p>
          <p className="process-notes">{step.notes}</p>
        </section>
      ))}
    </div>
  );
}
