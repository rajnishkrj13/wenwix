import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ 
  number, 
  title, 
  description, 
  btnText, 
  link, 
  icon: Icon,
  highlights = [] 
}) {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span className="service-num">{number}</span>
          {Icon && (
            <div style={{ 
              width: '44px', 
              height: '44px', 
              borderRadius: '10px', 
              background: 'rgba(0, 102, 255, 0.08)',
              border: '1px solid rgba(0, 102, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <Icon size={22} />
            </div>
          )}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        {highlights.length > 0 && (
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.6rem', 
            marginBottom: '2rem',
            paddingTop: '1rem',
            borderTop: '1px dashed var(--border-light)'
          }}>
            {highlights.map((item, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                fontSize: '0.88rem', 
                color: 'var(--text-muted)' 
              }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
        <Link to={link} className="btn-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          <span>{btnText}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
