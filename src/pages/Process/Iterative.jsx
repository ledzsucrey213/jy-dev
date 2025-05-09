import React from 'react';
import './process.css';

export default function ProcessIterative() {
  return (
    <div className="process-page">
      <h1 className="process-title">📈 Project — Iterative Website</h1>

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
        <h2 className="process-subtitle">🧭 Sprint 0 — Setup & Strategy</h2>
        <p className="process-desc">Goal: Define the core vision and MVP features.</p>
        <textarea className="process-textarea" placeholder="Write notes about sprint 0 planning..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🔁 Sprint 1 — First Deliverables</h2>
        <p className="process-desc">Goal: Deliver the first version of the product with essential features.</p>
        <textarea className="process-textarea" placeholder="Write notes about sprint 1 tasks..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🧪 Sprint 2+ — Iterations</h2>
        <p className="process-desc">Goal: Improve, add new features, and adapt based on feedback.</p>
        <textarea className="process-textarea" placeholder="Write notes about continuous updates..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🚀 Final Sprint — Launch</h2>
        <p className="process-desc">Goal: Prepare the final version and go live.</p>
        <textarea className="process-textarea" placeholder="Write notes about delivery and hand-off..."></textarea>
      </section>
    </div>
  );
}
