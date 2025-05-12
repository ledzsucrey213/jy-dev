import React from 'react';
import './process.css';

/*
👤 0. Client Information
Objectif : partir sur une meme base.
Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.

🧭 1. Discovery — Phase de découverte
Objectif : comprendre vos besoins, votre activité, et la finalité du site.
Nous débutons par un échange détaillé pour explorer vos envies, les objectifs du site, les attentes de vos utilisateurs, et les éléments que vous aimez ou souhaitez éviter. Ce moment est essentiel pour poser les fondations du projet, en nous assurant que nous allons dans la bonne direction, ensemble.

🧾 2. Quote & Planning — Devis et planification
Objectif : s’aligner sur les modalités de la collaboration.
Une fois les besoins bien identifiés, je vous transmets un devis précis, accompagné d’un planning prévisionnel. Cette étape vous permet de valider le budget, les livrables, les échéances et les conditions de paiement. C’est le cadre qui nous permettra d’avancer sereinement et efficacement.

🎨 3. Design & Validation — Création graphique et retours
Objectif : concevoir une maquette claire, moderne et validée.
Je vous propose une ou plusieurs maquettes visuelles du site, généralement réalisées sur Figma. Cela vous permet de visualiser l’apparence et la structure du futur site. Nous échangeons ensuite pour affiner ensemble jusqu’à validation finale. C’est à ce stade que l’identité visuelle du site prend vraiment forme.

💻 4. Development — Intégration et développement
Objectif : transformer la maquette en site réel, performant et responsive.
Une fois le design validé, je développe votre site avec les technologies les plus adaptées (React, Vite, CMS si besoin). J’y intègre les contenus, les animations, les formulaires ou toute autre fonctionnalité spécifique. Le site est optimisé pour le SEO, la rapidité de chargement, et bien sûr pour tous les supports (ordinateur, mobile, tablette).

🚀 5. Delivery & Support — Mise en ligne et accompagnement
Objectif : lancer le site et vous transmettre tous les accès.
Nous finalisons le projet avec la mise en ligne du site sur votre nom de domaine. Je vous fournis l’ensemble des accès, des ressources techniques, et une aide à la prise en main si nécessaire. Après le lancement, je reste disponible pour assurer un petit suivi et m’assurer que tout fonctionne parfaitement.
*/

export default function ProcessClassic() {
  const steps = [
    {
      title: '👤 0. Client Information',
      desc: " Start on the same page.",
      notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
    },
    {
      title: '🧭 1. Discovery',
      desc: "Understand your needs, your business, and the purpose of the site.",
      notes: `We start with an in-depth conversation to explore your goals, target audience, the kind of site you envision, and any visual inspirations or preferences. This step is crucial for laying a solid foundation and making sure we’re aligned from the very beginning.`,
    },
    {
      title: '🧾 2. Quote & Planning',
      desc: 'Align on collaboration terms.',
      notes: `Once your needs are clearly defined, I’ll send over a detailed quote along with a projected timeline. This helps you validate the budget, deliverables, deadlines, and payment terms. It’s our roadmap, ensuring a smooth and transparent collaboration.`,
    },
    {
      title: '🎨 3. Design & Validation',
      desc: 'Create a clean, modern, and validated visual concept.',
      notes: `I’ll provide you with one or more mockups (usually using Figma) to help you visualize the layout, colors, and overall structure of your future site. We’ll go through revisions if needed, and move forward only once the design feels 100% right for you.`,
    },
    {
      title: '💻 4. Development',
      desc: 'Build a functional, responsive, and optimized website.',
      notes: `Once the design is approved, I’ll start the development using the most suitable tools (React, Vite, or others). I’ll integrate your content, animations, forms, or any specific features you need. The site will be fast, SEO-ready, and fully responsive on all devices (desktop, tablet, and mobile).`,
    },
    {
      title: '🚀 5. Delivery & Support',
      desc: 'Launch the site and provide full access and guidance.',
      notes: `We’ll wrap things up with the site going live under your domain name. I’ll deliver all login credentials, key files, and a quick walkthrough if needed. I remain available for any small post-launch tweaks or questions to ensure everything works perfectly.`,
    },
  ];

  return (
    <div className="process-page">
      <h1 className="process-title">Classic Way 🛠️</h1>

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
