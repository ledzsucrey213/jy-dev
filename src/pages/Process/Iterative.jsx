import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './process.css';

export default function ProcessIterative() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Construction itérative 📈',
      steps: [
        {
          title: '👤 0. Informations client',
          desc: "Partir sur une base commune.",
          notes: `Nous prenons le temps de discuter de votre projet, de vos attentes, et de votre budget. Cela nous permet de nous aligner sur les objectifs et d’établir une bonne communication dès le départ.`,
        },
        {
          title: '🧭 Sprint 0 — Préparation & stratégie',
          desc: 'Définir la vision centrale et les fonctions MVP.',
          notes: `Nous clarifions les priorités et définissons les fonctionnalités minimales à livrer dans une première version.`,
        },
        {
          title: '🔁 Sprint 1 — Premiers livrables',
          desc: 'Fournir une première version fonctionnelle du site.',
          notes: `Nous livrons une base fonctionnelle du site. Ce n’est pas encore complet, mais c’est déjà utilisable.`,
        },
        {
          title: '🧪 Sprint 2+ — Itérations',
          desc: 'Améliorer, ajouter des fonctionnalités et s’adapter au retour.',
          notes: `Nous améliorons le site en continu, semaine après semaine, en nous basant sur vos retours et les données d’usage.`,
        },
        {
          title: '🚀 Dernier sprint — Lancement',
          desc: 'Finaliser la version complète et la mettre en ligne.',
          notes: `Nous consolidons le tout, peaufinons le produit et le mettons en ligne officiellement.`,
        },
      ],
    },
    en: {
      title: 'Iterative Build 📈',
      steps: [
        {
          title: '👤 0. Client Information',
          desc: "Start on the same page.",
          notes: `We take the time to discuss your project, your expectations, and your budget. This allows us to align on the objectives and establish clear, open communication from the very beginning.`,
        },
        {
          title: '🧭 Sprint 0 — Setup & Strategy',
          desc: 'Define the core vision and MVP features.',
          notes: `We map out what matters most, your priorities, and the minimal version of your product to test.`,
        },
        {
          title: '🔁 Sprint 1 — First Deliverables',
          desc: 'Deliver the first version of the product with essential features.',
          notes: `We build and ship a functional base version. It works, even if it’s not perfect yet.`,
        },
        {
          title: '🧪 Sprint 2+ — Iterations',
          desc: 'Improve, add new features, and adapt based on feedback.',
          notes: `We improve the site iteratively, week after week, based on usage data and your feedback.`,
        },
        {
          title: '🚀 Final Sprint — Launch',
          desc: 'Prepare the final version and go live.',
          notes: `We consolidate everything, polish the product, and release the full version to the public.`,
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
