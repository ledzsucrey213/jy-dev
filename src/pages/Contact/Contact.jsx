import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import mailIcon from "../../assets/icons/mail.png";

const Contact = () => {
  const { language } = useLanguage();

  const labels = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Nous vous répondrons dans les 48 heures.",
      name: "Nom *",
      company: "Entreprise",
      email: "Email *",
      phone: "Numéro de téléphone *",
      needPlaceholder: "De quoi avez-vous besoin ?",
      web: "Application Web",
      mobile: "Application Mobile",
      both: "Applications Web & Mobile",
      message: "Parlez-nous de votre projet...",
      submit: "ENVOYER",
      whatsapp: "WHATSAPP",
      emailTitle: "EMAIL",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue.",
    },
    en: {
      title: "Contact us",
      subtitle: "We will get back to you in the next 48 hours.",
      name: "Name *",
      company: "Company",
      email: "Email *",
      phone: "Phone Number *",
      needPlaceholder: "What do you need?",
      web: "Web Application",
      mobile: "Mobile Application",
      both: "Both Web & Mobile Applications",
      message: "Tell us more...",
      submit: "SUBMIT",
      whatsapp: "WHATSAPP",
      emailTitle: "EMAIL",
      success: "Message sent successfully!",
      error: "An error occurred.",
    },
  };

  const t = labels[language];

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
      alert(t.success);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        need: "",
        message: "",
      });
    } catch (error) {
      alert(t.error);
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder={t.name}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t.company}
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t.phone}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <select name="need" value={formData.need} onChange={handleChange} required>
              <option disabled value="">{t.needPlaceholder}</option>
              <option>{t.web}</option>
              <option>{t.mobile}</option>
              <option>{t.both}</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder={t.message}
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">{t.submit}</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-block">
          <h3>{t.whatsapp}</h3>
          <ul>
            <li>
              <img src={whatsappIcon} alt="whatsapp" />
              <span>Yanis Baroudi<br />+33 7 82 53 81 46</span>
            </li>
            <li>
              <img src={whatsappIcon} alt="whatsapp" />
              <span>Jalil Chaibderraine<br />+33 6 10 99 08 78</span>
            </li>
            <li>
              <img src={whatsappIcon} alt="whatsapp" />
              <span>Fethi Aziria<br />+33 7 81 77 42 45</span>
            </li>
          </ul>
        </div>

        <div className="info-block2">
          <h3>{t.emailTitle}</h3>
          <li>
            <img src={mailIcon} alt="email" />
            <span>yanis.baroudi36@gmail.com</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
