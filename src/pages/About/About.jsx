import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

const About = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "À propos de nous",
      intro:
        "Nous sommes une équipe passionnée de designers, développeurs et stratèges dédiée à la transformation des idées en produits numériques percutants. Notre mission est de donner du pouvoir aux entreprises grâce à des applications web et mobiles sur mesure qui allient performance et excellence esthétique. Nous nous efforçons également de rendre ces solutions accessibles — offrant des sites web et des applications mobiles à des prix raisonnables et réalisables pour les entreprises de toutes tailles, avec des délais de livraison optimisés pour répondre aux plannings les plus exigeants.",
      creating: "Création d'<span className='highlight'>expériences numériques</span> pour des marques tournées vers l'avenir",
      team: "L'équipe",
      extra: "Nos talents s'épanouissent face aux défis, à l'innovation et à la collaboration. Nous construisons des solutions logicielles évolutives et intuitives en mettant l'humain et le design au premier plan, garantissant que chaque projet — qu'il s'agisse d'une petite startup ou d'une grande entreprise — bénéficie de notre engagement envers la qualité, l'accessibilité et la rapidité d'exécution.",
      teamMembers: [
        { name: "Yanis Baroudi", role: "Développeur", img: "/avatar1.png" },
        { name: "Jalil Chaibderraine", role: "Développeur", img: "/avatar2.png" },
        { name: "Fethi Aziria", role: "Commercial", img: "/avatar3.png" },
      ],
      whyChoose: "Pourquoi nous choisir ?",
      reasons: [
        { icon: "💰", title: "Tarification raisonnable et transparente", description: "Nos tarifs sont conçus pour être accessibles aux petites startups comme aux grandes entreprises—sans frais cachés, sans surprises." },
        { icon: "🤝", title: "Support personnalisé et suivi dédié", description: "Vous aurez un interlocuteur unique pour garantir une communication fluide, des mises à jour régulières et une résolution rapide des problèmes." },
        { icon: "⚡", title: "Livraison rapide et délais optimisés", description: "Nous structurons nos flux de travail pour respecter des délais serrés sans sacrifier la qualité, afin que vous puissiez lancer à temps et devancer vos concurrents." },
        { icon: "🔒", title: "Assurance qualité robuste et sécurité", description: "Des tests automatisés, des revues de code et des analyses de vulnérabilités garantissent que votre application soit fiable, maintenable et sécurisée." },
      ],
    },
    en: {
      title: "About Us",
      intro:
        "We are a passionate team of designers, developers, and strategists dedicated to transforming ideas into impactful digital products. Our mission is to empower businesses through tailored web and mobile applications that deliver both performance and aesthetic excellence. We also strive to make these solutions accessible—offering websites and mobile apps at reasonable, achievable prices for companies of all sizes, with delivery times optimized to meet even the most demanding schedules.",
      creating: "Creating <span className='highlight'>digital experiences</span> for forward-thinking brands",
      team: "The Team",
      extra: "Our talents thrive on challenge, innovation, and collaboration. We build scalable and intuitive software solutions by putting people and design first, ensuring every project—whether for a small startup or a large enterprise—benefits from our commitment to quality, affordability, and rapid turnaround.",
      teamMembers: [
        { name: "Yanis Baroudi", role: "Developer", img: "/avatar1.png" },
        { name: "Jalil Chaibderraine", role: "Developer", img: "/avatar2.png" },
        { name: "Fethi Aziria", role: "Commercial", img: "/avatar3.png" },
      ],
      whyChoose: "Why Choose Us?",
      reasons: [
        { icon: "💰", title: "Reasonable & transparent pricing", description: "Our rates are designed to be accessible for small startups and large enterprises alike—no hidden fees, no surprises." },
        { icon: "🤝", title: "Personalized support & dedicated follow-up", description: "You'll have a single point of contact to ensure smooth communication, regular updates, and quick issue resolution." },
        { icon: "⚡", title: "Rapid delivery & optimized timelines", description: "We structure our workflows to meet tight deadlines without sacrificing quality, so you can launch on time and ahead of your competitors." },
        { icon: "🔒", title: "Robust quality assurance & security", description: "Automated tests, code reviews, and vulnerability scans ensure your application is reliable, maintainable, and secure." },
      ],
    },
  };

  return (
    <>
      {/* Section Principale About */}
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title-bg">{content[language].title}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: content[language].creating }} />
          <p className="about-intro">{content[language].intro}</p>
          <p>{content[language].extra}</p>
        </div>

        <div className="about-right">
          <img src="/developer.jpg" alt="Team" className="about-image" />
        </div>
      </div>

      {/* Section The Team */}
      <div className="team-section">
        <h2>{content[language].team}</h2>
        <div className="team-cards">
          {content[language].teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} className="team-photo" />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Why Choose Us */}
      <div className="why-section">
        <h2>{content[language].whyChoose}</h2>

        <div className="why-cards">
          {content[language].reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
