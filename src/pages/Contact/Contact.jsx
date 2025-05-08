import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Formulaire */}
      <div className="contact-form">
        <h2>Contact us</h2>
        <p>We will get back to you in the next 48 hours.</p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Company" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email *" required />
            <input type="tel" placeholder="Phone Number *" required />
          </div>
          <div className="form-row">
            <select>
            <option disabled selected>What do you need?</option>
            <option>Web Application</option>
            <option>Mobile Application</option>
            <option>Both Web & Mobile Applications</option>
            </select>
          </div>
          <textarea placeholder="Tell us more..." rows="5"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Coordonnées */}
      <div className="contact-info">
        <div className="info-block">
          <h3>WHATSAPP</h3>
          <ul>
            <li>
              <img src="/whatsapp.png" alt="whatsapp" />
              <span>Yanis Baroudi<br />+33 7 82 53 81 46</span>
            </li>
            <li>
              <img src="/whatsapp.png" alt="whatsapp" />
              <span>Jalil Chaibderraine<br />+33 6 10 99 08 78</span>
            </li>
            <li>
              <img src="/whatsapp.png" alt="whatsapp" />
              <span>Fethi Aziria<br />+33 7 81 77 42 45</span>
            </li>
          </ul>
        </div>

        <div className="info-block2">
          <h3>EMAIL</h3>
          <li>
            <img src="/mail.png" alt="email" />
            <span>yanis.baroudi36@gmail.com</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
