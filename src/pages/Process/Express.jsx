import React from 'react';
import './process.css';

export default function ProcessExpress() {
  return (
    <div className="process-page">
      <h1 className="process-title">⚡ Project — Express Website</h1>

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
        <h2 className="process-subtitle">🗓️ Day 1 — Discovery</h2>
        <p className="process-desc">Goal: Clarify needs and align expectations quickly.</p>
        <textarea className="process-textarea" placeholder="Write notes about the discovery call..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🎨 Day 2 — Design</h2>
        <p className="process-desc">Goal: Create and validate a simple visual structure.</p>
        <textarea className="process-textarea" placeholder="Write notes about mockups or style chosen..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">💻 Days 3-4 — Development</h2>
        <p className="process-desc">Goal: Build and integrate the homepage and basic pages.</p>
        <textarea className="process-textarea" placeholder="Write notes about development progress..."></textarea>
      </section>

      <section className="process-section">
        <h2 className="process-subtitle">🚀 Day 5 — Delivery</h2>
        <p className="process-desc">Goal: Deploy and deliver a clean, functional site with basic training.</p>
        <textarea className="process-textarea" placeholder="Write notes about launch, links, and support..."></textarea>
      </section>
    </div>
  );
}
