import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <h1 className="services-title-bg">Our Services</h1>

        <section className="service-block">
          <div className="service-content">
            <h2>
              Custom <span className="highlight">Websites</span> tailored to your needs
            </h2>
            <p>
              We build modern, responsive, and high-performance websites designed to showcase your brand 
              and engage your audience. Whether you need a landing page, a portfolio, or a full-fledged 
              corporate platform, our team delivers elegant and functional solutions at unmatched value.
            </p>
            <p className="price-note">Websites starting at just <strong>€600</strong></p>
          </div>
          <div className="service-image">
            <img src="/burger-website.PNG" alt="Website Example" />
          </div>
        </section>

        <section className="service-block reverse">
          <div className="service-content">
            <h2>
              Powerful <span className="highlight">Mobile Applications</span>
            </h2>
            <p>
              From concept to launch, we craft sleek and scalable mobile apps for both iOS and Android. 
              Our applications are designed to deliver a smooth user experience, robust performance, and 
              real business results—perfect for startups and growing companies.
            </p>
            <p className="price-note">Mobile apps available from <strong>€1000</strong></p>
          </div>
          <div className="service-image">
            <img src="/default-mobile.jpg" alt="Mobile App Example" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
