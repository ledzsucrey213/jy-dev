import React from 'react';
import './process.css';

export default function ProcessAllInclusive() {
  return (
    <div className="process-page">
      <h1 className="process-title">🎁 Project — All-Inclusive Website</h1>

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
        <h2 className="process-subtitle">🧭 Step 1 — Discovery</h2>
        <p className="process-desc">Goal: Understand the project, target and expectations.</p>
        <textarea className="process-textarea" placeholder="Write notes about the brief and vision..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">📝 Step 2 — Content Creation</h2>
        <p className="process-desc">Goal: Prepare texts, images and legal information.</p>
        <textarea className="process-textarea" placeholder="Write notes about content gathering..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🎨 Step 3 — Design</h2>
        <p className="process-desc">Goal: Deliver validated mockups and branding.</p>
        <textarea className="process-textarea" placeholder="Write notes about design direction..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">💻 Step 4 — Development</h2>
        <p className="process-desc">Goal: Build a complete, optimized and GDPR-compliant site.</p>
        <textarea className="process-textarea" placeholder="Write notes about integrations and features..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🚀 Step 5 — Delivery</h2>
        <p className="process-desc">Goal: Launch and give full access with training.</p>
        <textarea className="process-textarea" placeholder="Write notes about domain, access and support..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🔄 Step 6 — Maintenance (optional)</h2>
        <p className="process-desc">Goal: Keep the website secure, updated and supported over time.</p>
        <textarea className="process-textarea" placeholder="Write notes about recurring support or updates..."></textarea>
      </section>
    </div>
  );
}
