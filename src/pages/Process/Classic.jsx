import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './process.css';

export default function ProcessClassic() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Méthode Classique 🛠️',
      steps: [
        {
          title: '👤 0. Informations client',
          desc: "Partir sur une base commune.",
          notes: `Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.`,
        },
        {
          title: '🧭 1. Découverte',
          desc: "Comprendre vos besoins, votre activité, et la finalité du site.",
          notes: `Nous débutons par un échange détaillé pour explorer vos envies, les objectifs du site, les attentes de vos utilisateurs, et les éléments que vous aimez ou souhaitez éviter. Ce moment est essentiel pour poser les fondations du projet.`,
        },
        {
          title: '🧾 2. Devis et planification',
          desc: 'S’aligner sur les modalités de la collaboration.',
          notes: `Une fois les besoins identifiés, je vous transmets un devis précis avec un planning prévisionnel. Vous validez ainsi budget, livrables, échéances et conditions de paiement.`,
        },
        {
          title: '🎨 3. Design et validation',
          desc: 'Créer une maquette claire, moderne et validée.',
          notes: `Je conçois une ou plusieurs maquettes (généralement sur Figma) pour visualiser la structure du site. Nous ajustons ensemble jusqu’à validation finale.`,
        },
        {
          title: '💻 4. Développement',
          desc: 'Développer un site performant et responsive.',
          notes: `Après validation du design, je développe le site avec les outils adaptés. J’intègre les contenus, formulaires, animations, et j’optimise le SEO, la rapidité et l’accessibilité sur tous les supports.`,
        },
        {
          title: '🚀 5. Livraison et accompagnement',
          desc: 'Mettre le site en ligne et transmettre les accès.',
          notes: `Le site est mis en ligne sous votre nom de domaine. Je vous remets tous les accès et reste disponible pour un suivi post-lancement.`,
        },
      ],
    },
    en: {
      title: 'Classic Way 🛠️',
      steps: [
        {
          title: '👤 0. Client Information',
          desc: "Start on the same page.",
          notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
        },
        {
          title: '🧭 1. Discovery',
          desc: "Understand your needs, your business, and the purpose of the site.",
          notes: `We start with an in-depth conversation to explore your goals, target audience, the kind of site you envision, and any visual inspirations or preferences.`,
        },
        {
          title: '🧾 2. Quote & Planning',
          desc: 'Align on collaboration terms.',
          notes: `Once your needs are clearly defined, I’ll send over a detailed quote along with a projected timeline. This helps you validate the budget, deliverables, deadlines, and payment terms.`,
        },
        {
          title: '🎨 3. Design & Validation',
          desc: 'Create a clean, modern, and validated visual concept.',
          notes: `I’ll provide one or more mockups (usually using Figma) to help you visualize the layout and style. We'll go through revisions if needed until you're fully satisfied.`,
        },
        {
          title: '💻 4. Development',
          desc: 'Build a functional, responsive, and optimized website.',
          notes: `Once the design is approved, I develop the site using the most suitable tools. I’ll integrate content, animations, forms, and ensure speed, SEO, and mobile responsiveness.`,
        },
        {
          title: '🚀 5. Delivery & Support',
          desc: 'Launch the site and provide full access and guidance.',
          notes: `The site goes live under your domain. I deliver all credentials, technical resources, and assist you as needed post-launch.`,
        },
      ],
    },
  };

  return (
    <div className="process-page">
      <h1 className="process-title">{content[language].title}</h1>

      {content[language].steps.map((step, index) => (
        <section className="process-section" key={index}>
          <h2 className="process-subtitle">{step.title}</h2>
          <p className="process-desc">{step.desc}</p>
          <p className="process-notes">{step.notes}</p>
        </section>
      ))}
    </div>
  );
}
