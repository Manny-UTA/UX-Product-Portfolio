// src/components/ContactSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="contact-section contact--heroish" id="contact">
      {/* decorative orbs (match your hero energy) */}
      <div className="fx-orb orb1" aria-hidden="true" />
      <div className="fx-orb orb2" aria-hidden="true" />
      <div className="fx-orb orb3" aria-hidden="true" />

      <div className="contact-inner">
        <h2>Need to contact me?</h2>
        <p>
          Reach out on LinkedIn — it’s the fastest way to get me. I’m quick to reply
          (unless I’m mid-Figma flow).
        </p>

        <motion.a
          href="https://www.linkedin.com/in/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button large glow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="cta-label">Let’s talk</span>
        </motion.a>
      </div>
    </section>
  );
}
