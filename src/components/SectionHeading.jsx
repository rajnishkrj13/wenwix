import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ 
  badge, 
  title, 
  description, 
  align = 'left',
  className = '' 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '720px' : '640px',
        margin: align === 'center' ? '0 auto 3.5rem auto' : '0 0 3.5rem 0'
      }}
      className={className}
    >
      {badge && (
        <div className="badge-pill">
          <span className="badge-dot"></span>
          <span>{badge}</span>
        </div>
      )}
      {title && <h2 style={{ marginBottom: description ? '1rem' : '0' }}>{title}</h2>}
      {description && <p>{description}</p>}
    </motion.div>
  );
}
