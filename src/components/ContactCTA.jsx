import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          className="cta-card-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle glow background element */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
            pointerEvents: 'none',
            borderRadius: '50%'
          }} />

          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="badge-dot" />
              <span>Get Started</span>
            </div>
            <h2 style={{ marginBottom: '1.25rem' }}>
              Have a business process that could work better?
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Tell us what you are trying to improve. We'll help you find a practical way forward.
            </p>
            <Button to="/contact" variant="primary">
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
