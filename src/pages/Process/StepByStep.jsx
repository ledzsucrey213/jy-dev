import React from 'react';
import './process.css';

export default function ProcessStepByStep() {
  return (
    <div className="process-page">
      <h1 className="process-title">📁 Project — Step-by-Step Website</h1>

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
        <h2 className="process-subtitle">🧩 1. Needs & Scope</h2>
        <p className="process-desc">Goal: Define what should be done and in what order.</p>
        <textarea className="process-textarea" placeholder="Write notes about the project scoping..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">📐 2. First Deliverables</h2>
        <p className="process-desc">Goal: Deliver a first block of features or pages.</p>
        <textarea className="process-textarea" placeholder="Write notes about the first deliverables..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🔁 3. Next Steps</h2>
        <p className="process-desc">Goal: Define what comes next and update the priorities.</p>
        <textarea className="process-textarea" placeholder="Write notes about the following blocks..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">📝 4. Client Feedback</h2>
        <p className="process-desc">Goal: Review with the client before going further.</p>
        <textarea className="process-textarea" placeholder="Write notes about client feedback..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🚀 5. Final Delivery</h2>
        <p className="process-desc">Goal: Deploy and hand over everything once all modules are delivered.</p>
        <textarea className="process-textarea" placeholder="Write notes about final delivery..."></textarea>
      </section>
    </div>
  );
}