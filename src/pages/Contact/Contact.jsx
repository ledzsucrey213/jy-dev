import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzq328TufDokMgDSJwwQaxDg8sDHs_N9HLwpEARqAKNyHY0HNZXR3AMJPkf0f5DNlcVLQ/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      alert("Message envoyé avec succès !");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        need: "",
        message: "",
      });
    } catch (error) {
      alert("Une erreur est survenue.");
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact us</h2>
        <p>We will get back to you in the next 48 hours.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <select name="need" value={formData.need} onChange={handleChange} required>
              <option disabled value="">What do you need?</option>
              <option>Web Application</option>
              <option>Mobile Application</option>
              <option>Both Web & Mobile Applications</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Tell us more..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
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
