import React from 'react';
import './process.css';

/*
👤 0. Client Information
Objectif : partir sur une meme base.
Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.

[
  {
    title: '🗓️ Jour 1 — Découverte',
    desc: 'Clarifier les besoins et s’aligner rapidement.',
    notes: `Un appel ciblé permet de définir rapidement ce qu’il faut faire, pour qui, et dans quel délai.`,
  },
  {
    title: '🎨 Jour 2 — Design',
    desc: 'Créer et valider une structure visuelle simple.',
    notes: `Je conçois une maquette claire et minimaliste, que nous validons rapidement pour pouvoir avancer vite.`,
  },
  {
    title: '💻 Jours 3–4 — Développement',
    desc: 'Développer la page d’accueil et les pages de base.',
    notes: `Je construis les pages principales, ajoute l’interactivité nécessaire et intègre le contenu.`,
  },
  {
    title: '🚀 Jour 5 — Livraison',
    desc: 'Mettre en ligne un site simple et fonctionnel avec une brève formation.',
    notes: `Le site est mis en ligne et je vous remets les accès avec un petit guide d’utilisation.`,
  },
]
*/

export default function ProcessExpress() {
  const steps = [
    {
      title: '👤 0. Client Information',
      desc: " Start on the same page.",
      notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
    },
    {
    title: '🗓️ Day 1 — Discovery',
    desc: 'Clarify needs and align expectations quickly.',
    notes: `We start with a focused call to define what needs to be built, by when, and for whom. Fast and clear.`,
  },
  {
    title: '🎨 Day 2 — Design',
    desc: 'Create and validate a simple visual structure.',
    notes: `I draft a clean and simple layout that we validate together. Just enough design to get things rolling fast.`,
  },
  {
    title: '💻 Days 3–4 — Development',
    desc: 'Build and integrate the homepage and basic pages.',
    notes: `I build out the main pages, set up basic interactivity, and integrate key tools and content.`,
  },
  {
    title: '🚀 Day 5 — Delivery',
    desc: 'Deploy and deliver a clean, functional site with basic training.',
    notes: `We launch the site and I hand off access and instructions so you can use it confidently on your own.`,
  },
  ];

  return (
    <div className="process-page">
      <h1 className="process-title">'Quick Launch Website ⚡'</h1>

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
