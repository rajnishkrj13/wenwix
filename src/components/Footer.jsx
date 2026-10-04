import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-col">
            <Link to="/" className="logo-brand" style={{ marginBottom: '1.25rem' }}>
              wenwix<span className="logo-dot">.</span>
            </Link>
            <p style={{ maxWidth: '320px', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
              Technology, business and digital experience solutions engineered for practical execution and modern growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', opacity: 0.8 }}>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover-expand">
                <Globe size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Share" className="hover-expand">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hr-software">HR Software</Link></li>
              <li><Link to="/tally-accounting">Tally & Accounting</Link></li>
              <li><Link to="/360-virtual-tours">360° Virtual Tours</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div className="footer-col">
            <h5>Solutions</h5>
            <ul className="footer-links">
              <li><Link to="/hr-software">Employee Management</Link></li>
              <li><Link to="/hr-software">Attendance & Payroll</Link></li>
              <li><Link to="/tally-accounting">Tally Setup & Ledgers</Link></li>
              <li><Link to="/tally-accounting">Bookkeeping & MIS</Link></li>
              <li><Link to="/360-virtual-tours">Hotel & School Virtual Tours</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="footer-col">
            <h5>Connect</h5>
            <ul className="footer-links" style={{ gap: '1.1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>contact@wenwix.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Phone size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>+91 (800) 123-4567</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 Wenwix Technologies. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Practical Business Technology</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Reliable Digital Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
