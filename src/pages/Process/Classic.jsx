import React from 'react';
import './process.css';

export default function ProcessClassic() {

  return (
    <div className="process-page">
      <h1 className="process-title">📁 Project — Structured Website</h1>

      <section className="process-section">
        <h2 className="process-subtitle">👤 Client Information</h2>
        <ul className="process-list">
          <li><strong>Name:</strong></li>
          <li><strong>Company:</strong></li>
          <li><strong>Email:</strong></li>
          <li><strong>Phone:</strong></li>
          <li><strong>Project Start Date:</strong></li>
          <li><strong>Total Budget:</strong></li>
        </ul>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🧭 1. Discovery</h2>
        <p className="process-desc">
          Goal: Understand the client's needs.
        </p>
        <textarea className="process-textarea" placeholder="Write notes about the discovery phase..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🧾 2. Quote & Planning</h2>
        <p className="process-desc">
          Goal: Align on the collaboration terms.
        </p>
        <textarea className="process-textarea" placeholder="Write notes about the quote and planning..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🎨 3. Design & Validation</h2>
        <p className="process-desc">
          Goal: Create a clear, modern and validated mockup.
        </p>
        <textarea className="process-textarea" placeholder="Write notes about the design and feedback..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">💻 4. Development</h2>
        <p className="process-desc">
          Goal: Turn the mockup into a real, functional website.
        </p>
        <textarea className="process-textarea" placeholder="Write notes about development progress..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🚀 5. Delivery & Support</h2>
        <p className="process-desc">
          Goal: Finalize the project and support the client.
        </p>
        <textarea className="process-textarea" placeholder="Write notes about delivery, access and training..."></textarea>
      </section>
    </div>
  );
}
