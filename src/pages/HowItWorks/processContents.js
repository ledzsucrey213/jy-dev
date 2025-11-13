const processContents = {
  classic: {
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
          notes: `Nous débutons par un échange détaillé pour explorer vos envies, les objectifs du site, les attentes de vos utilisateurs, et les éléments que vous aimez ou souhaitez éviter.`,
        },
        {
          title: '🧾 2. Devis et planification',
          desc: 'S’aligner sur les modalités de la collaboration.',
          notes: `Une fois les besoins identifiés, je vous transmets un devis précis avec un planning prévisionnel.`,
        },
        {
          title: '🎨 3. Design et validation',
          desc: 'Créer une maquette claire, moderne et validée.',
          notes: `Je conçois une ou plusieurs maquettes (généralement sur Figma) pour visualiser la structure du site.`,
        },
        {
          title: '💻 4. Développement',
          desc: 'Développer un site performant et responsive.',
          notes: `Après validation du design, je développe le site, j’intègre les contenus, formulaires, animations, et j’optimise le SEO et la rapidité.`,
        },
        {
          title: '🚀 5. Livraison et accompagnement',
          desc: 'Mettre le site en ligne et transmettre les accès.',
          notes: `Le site est mis en ligne sous votre nom de domaine. Je vous remets tous les accès et reste disponible pour le suivi.`,
        },
      ],
    },
    en: {
      title: 'Classic Way 🛠️',
      steps: [
        {
          title: '👤 0. Client Information',
          desc: "Start on the same page.",
          notes: `We take the time to discuss your project, your expectations, and your budget.`,
        },
        {
          title: '🧭 1. Discovery',
          desc: "Understand your needs, your business, and the purpose of the site.",
          notes: `We start with an in-depth conversation to explore your goals and target audience.`,
        },
        {
          title: '🧾 2. Quote & Planning',
          desc: 'Align on collaboration terms.',
          notes: `Once your needs are defined, I’ll send a detailed quote and projected timeline.`,
        },
        {
          title: '🎨 3. Design & Validation',
          desc: 'Create a clean, modern, and validated visual concept.',
          notes: `We review mockups together until validation.`,
        },
        {
          title: '💻 4. Development',
          desc: 'Build a functional, responsive, and optimized website.',
          notes: `I code, integrate, and optimize for SEO, speed, and accessibility.`,
        },
        {
          title: '🚀 5. Delivery & Support',
          desc: 'Launch the site and provide full access.',
          notes: `I launch the site under your domain and provide full support.`,
        },
      ],
    },
  },

  'step-by-step': {
    fr: {
      title: 'Étape par étape 🔒',
      steps: [
        { title: '👤 0. Informations client', desc: 'Partir sur une base commune.', notes: `Nous discutons de vos besoins et de votre budget.` },
        { title: '🧩 1. Besoins & périmètre', desc: 'Définir ce qui doit être fait et dans quel ordre.', notes: `Nous découpons le projet en blocs clairs.` },
        { title: '📐 2. Premiers livrables', desc: 'Fournir un premier ensemble de fonctionnalités.', notes: `On commence par les éléments essentiels.` },
        { title: '🔁 3. Étapes suivantes', desc: 'Réajuster les priorités après chaque livraison.', notes: `On avance bloc par bloc.` },
        { title: '📝 4. Retours client', desc: 'Faire une revue avant d’avancer davantage.', notes: `On ajuste et corrige selon vos retours.` },
        { title: '🚀 5. Livraison finale', desc: 'Mettre en ligne et transmettre tous les accès.', notes: `Vous avez ensuite le contrôle total du site.` },
      ],
    },
    en: {
      title: 'Step by step 🔒',
      steps: [
        { title: '👤 0. Client Information', desc: 'Start on the same page.', notes: `We discuss your needs and budget.` },
        { title: '🧩 1. Needs & Scope', desc: 'Define what should be done and in what order.', notes: `We break down your project into clear chunks.` },
        { title: '📐 2. First Deliverables', desc: 'Deliver a first block of features or pages.', notes: `We start with essentials.` },
        { title: '🔁 3. Next Steps', desc: 'Update priorities after each delivery.', notes: `We move block by block.` },
        { title: '📝 4. Client Feedback', desc: 'Review before moving forward.', notes: `We refine together.` },
        { title: '🚀 5. Final Delivery', desc: 'Deploy and hand over everything.', notes: `You have full control after delivery.` },
      ],
    },
  },

  express: {
    fr: {
      title: 'Site Express ⚡',
      steps: [
        { title: '👤 Jour 0', desc: 'Informations client.', notes: `Nous définissons votre besoin et votre délai.` },
        { title: '🗓️ Jour 1 — Découverte', desc: 'Clarifier les besoins.', notes: `Un appel rapide pour s’aligner.` },
        { title: '🎨 Jour 2 — Design', desc: 'Créer une maquette simple.', notes: `Validation express du visuel.` },
        { title: '💻 Jours 3–4 — Développement', desc: 'Développer le site.', notes: `Pages principales et contenus intégrés.` },
        { title: '🚀 Jour 5 — Livraison', desc: 'Mettre en ligne.', notes: `Le site est prêt et fonctionnel.` },
      ],
    },
    en: {
      title: 'Quick Launch Website ⚡',
      steps: [
        { title: '👤 Day 0', desc: 'Client information.', notes: `Define your goals and deadline.` },
        { title: '🗓️ Day 1 — Discovery', desc: 'Clarify needs.', notes: `Quick meeting to align.` },
        { title: '🎨 Day 2 — Design', desc: 'Simple mockup creation.', notes: `Fast validation.` },
        { title: '💻 Days 3–4 — Development', desc: 'Build the site.', notes: `Implement core pages.` },
        { title: '🚀 Day 5 — Delivery', desc: 'Go live.', notes: `Site ready and launched.` },
      ],
    },
  },

  iterative: {
    fr: {
      title: 'Construction itérative 📈',
      steps: [
        { title: '👤 0. Informations client', desc: 'Partir sur une base commune.', notes: `On définit les besoins et objectifs.` },
        { title: '🧭 Sprint 0 — Stratégie', desc: 'Définir le MVP.', notes: `On détermine la première version à livrer.` },
        { title: '🔁 Sprint 1 — Livrable initial', desc: 'Première version fonctionnelle.', notes: `Le site est utilisable dès cette étape.` },
        { title: '🧪 Sprint 2+ — Itérations', desc: 'Améliorations continues.', notes: `On ajoute et corrige selon vos retours.` },
        { title: '🚀 Dernier sprint — Lancement', desc: 'Mise en ligne finale.', notes: `Version complète et optimisée.` },
      ],
    },
    en: {
      title: 'Iterative Build 📈',
      steps: [
        { title: '👤 0. Client Info', desc: 'Start aligned.', notes: `We define priorities.` },
        { title: '🧭 Sprint 0 — Strategy', desc: 'Define MVP.', notes: `We decide what to deliver first.` },
        { title: '🔁 Sprint 1 — First Deliverable', desc: 'Functional version.', notes: `Usable and testable.` },
        { title: '🧪 Sprint 2+ — Iterations', desc: 'Add features.', notes: `We iterate based on feedback.` },
        { title: '🚀 Final Sprint — Launch', desc: 'Go live.', notes: `Final optimized version.` },
      ],
    },
  },

  'all-inclusive': {
    fr: {
      title: 'Site Tout Compris 🎁',
      steps: [
        { title: '👤 0. Informations client', desc: 'Partir sur une même base.', notes: `Nous échangeons sur vos attentes.` },
        { title: '🧭 Étape 1 — Découverte', desc: 'Comprendre le projet.', notes: `On identifie vos objectifs et cibles.` },
        { title: '📝 Étape 2 — Contenu', desc: 'Créer textes et visuels.', notes: `Nous rédigeons et sélectionnons les éléments.` },
        { title: '🎨 Étape 3 — Design', desc: 'Concevoir et valider le style.', notes: `Nous définissons la direction graphique.` },
        { title: '💻 Étape 4 — Développement', desc: 'Construire le site complet.', notes: `Intégration technique et SEO.` },
        { title: '🚀 Étape 5 — Livraison', desc: 'Mettre en ligne et former.', notes: `Vous recevez un site prêt à l’emploi.` },
        { title: '🔄 Étape 6 — Maintenance', desc: 'Optionnelle.', notes: `Suivi, mises à jour et assistance.` },
      ],
    },
    en: {
      title: 'All-Inclusive Website 🎁',
      steps: [
        { title: '👤 0. Client Info', desc: 'Start aligned.', notes: `We discuss goals and expectations.` },
        { title: '🧭 Step 1 — Discovery', desc: 'Understand the project.', notes: `Identify objectives and target audience.` },
        { title: '📝 Step 2 — Content', desc: 'Create text and visuals.', notes: `We craft all required materials.` },
        { title: '🎨 Step 3 — Design', desc: 'Build and validate visuals.', notes: `Design aligned with your brand.` },
        { title: '💻 Step 4 — Development', desc: 'Build the website.', notes: `SEO and performance optimized.` },
        { title: '🚀 Step 5 — Delivery', desc: 'Launch and train.', notes: `Full access and documentation.` },
        { title: '🔄 Step 6 — Maintenance', desc: 'Optional follow-up.', notes: `Updates and technical support.` },
      ],
    },
  },
};

export default processContents;
