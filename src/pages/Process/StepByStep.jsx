import React from 'react';
import './process.css';

/*
👤 0. Client Information
Objectif : partir sur une meme base.
Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.

[
  {
    title: '🧩 1. Besoins & périmètre',
    desc: 'Définir ce qui doit être fait et dans quel ordre.',
    notes: `Nous découpons le projet en blocs clairs et décidons des priorités dans leur exécution.`,
  },
  {
    title: '📐 2. Premiers livrables',
    desc: 'Fournir un premier ensemble de fonctionnalités ou pages.',
    notes: `On commence par livrer les éléments essentiels, utilisables tout de suite.`,
  },
  {
    title: '🔁 3. Étapes suivantes',
    desc: 'Définir les blocs suivants et réajuster les priorités.',
    notes: `Après chaque livraison, on réévalue les priorités pour continuer par ce qui est le plus pertinent.`,
  },
  {
    title: '📝 4. Retours client',
    desc: 'Faire une revue avant d’avancer davantage.',
    notes: `On prend un temps pour faire le point, ajuster, corriger, et s’assurer que tout vous convient.`,
  },
  {
    title: '🚀 5. Livraison finale',
    desc: 'Mettre en ligne et transmettre tous les accès.',
    notes: `Une fois tout validé, on met le site en ligne et vous recevez tout ce qu’il faut pour en avoir le contrôle total.`,
  },
]
*/

export default function ProcessStepByStep() {
  const steps = [
    {
      title: '👤 0. Client Information',
      desc: " Start on the same page.",
      notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
    },
   {
    title: '🧩 1. Needs & Scope',
    desc: 'Define what should be done and in what order.',
    notes: `We break down your project into clear chunks and decide what to build first, second, and later.`,
  },
  {
    title: '📐 2. First Deliverables',
    desc: 'Deliver a first block of features or pages.',
    notes: `We start building the essentials and deploy them as soon as they’re ready.`,
  },
  {
    title: '🔁 3. Next Steps',
    desc: 'Define what comes next and update the priorities.',
    notes: `After the first block is delivered, we reassess priorities and plan the next batch of work.`,
  },
  {
    title: '📝 4. Client Feedback',
    desc: 'Review with the client before going further.',
    notes: `We take a step back to review, adjust, and refine before finalizing.`,
  },
  {
    title: '🚀 5. Final Delivery',
    desc: 'Deploy and hand over everything once all modules are delivered.',
    notes: `Once all elements are complete and validated, we go live and hand over full control.`,
  },
  ];

  return (
    <div className="process-page">
      <h1 className="process-title">Step by step 🔒</h1>

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
