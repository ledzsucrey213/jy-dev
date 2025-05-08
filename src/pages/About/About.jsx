import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* Section Principale About */}
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title-bg">About Us</h1>
          <h2>
            Creating <span className="highlight">digital experiences</span> for forward-thinking brands
          </h2>
          <p>
          We are a passionate team of designers, developers, and strategists dedicated to transforming ideas into 
          impactful digital products. Our mission is to empower businesses through tailored web and mobile applications 
          that deliver both performance and aesthetic excellence. We also strive to make these solutions accessible—offering 
          websites and mobile apps at reasonable, achievable prices for companies of all sizes, with delivery times optimized 
          to meet even the most demanding schedules.
          </p>
          <p>
          Our talents thrive on challenge, innovation, and collaboration. We build scalable and intuitive software
           solutions by putting people and design first, ensuring every project—whether for a small startup or a large enterprise—benefits 
           from our commitment to quality, affordability, and rapid turnaround.
          </p>
        </div>

        <div className="about-right">
          <img
            src="/developer.jpg"
            alt="Team"
            className="about-image"
          />
        </div>
      </div>

      {/* Section The Team */}
        <div className="team-section">
        <h2>The Team</h2>
        <div className="team-cards">
            <div className="team-card">
            <img
                src="/avatar1.png"
                alt="Yanis Baroudi"
                className="team-photo"
            />
            <h4>Yanis Baroudi</h4>
            <p>Developer</p>
            </div>
            <div className="team-card">
            <img
                src="avatar2.png"
                alt="Jalil Chaibderraine"
                className="team-photo"
            />
            <h4>Jalil Chaibderraine</h4>
            <p>Developer</p>
            </div>
            <div className="team-card">
            <img
                src="/avatar3.png"
                alt="Fethi Aziria"
                className="team-photo"
            />
            <h4>Fethi Aziria</h4>
            <p>Commercial</p>
            </div>
        </div>
        </div>





      {/* Section Why Choose Us */}
      <div className="why-section">
        <h2>Why Choose Us?</h2>

        <div className="why-cards">
            <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Reasonable & transparent pricing</h3>
            <p>Our rates are designed to be accessible for small startups and large enterprises alike—no hidden fees, no surprises.</p>
            </div>

            <div className="why-card">
            <div className="why-icon">🤝</div>
            <h3>Personalized support & dedicated follow-up</h3>
            <p>You'll have a single point of contact to ensure smooth communication, regular updates, and quick issue resolution.</p>
            </div>

            <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Rapid delivery & optimized timelines</h3>
            <p>We structure our workflows to meet tight deadlines without sacrificing quality, so you can launch on time and ahead of your competitors.</p>
            </div>

            <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Robust quality assurance & security</h3>
            <p>Automated tests, code reviews, and vulnerability scans ensure your application is reliable, maintainable, and secure.</p>
            </div>
        </div>
        </div>


    </>
  );
};

export default About;
