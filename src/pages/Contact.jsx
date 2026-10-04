import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'HR Software',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate professional response submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wenwix Technologies",
    "description": "Get in touch with Wenwix Technologies for HR software, Tally accounting support, and 360° virtual tours.",
    "url": "https://wenwix.com/contact"
  };

  return (
    <>
      <SEO 
        title="Contact Wenwix Technologies | Get in Touch"
        description="Discuss your HR software, Tally accounting, or 360° virtual tour requirements with Wenwix Technologies."
        keywords="contact Wenwix Technologies, HR software enquiry, Tally services contact, 360 virtual tour consultation"
        canonical="https://wenwix.com/contact"
        schemaData={schema}
      />

      <section className="hero-section-padding">
        <div className="container">
          <div className="contact-hero-grid">
            
            {/* Left Contact Details & Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="badge-pill">
                <span className="badge-dot" />
                <span>Get in Touch</span>
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>
                Let's discuss what you're building.
              </h1>
              <p style={{ marginBottom: '2.25rem' }}>
                Have an operational challenge, accounting backlog, or spatial project? 
                Share your requirements and we will help you evaluate practical next steps.
              </p>

              {/* Direct Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}>
                  <div style={{ padding: '0.65rem', borderRadius: '10px', background: 'rgba(0, 102, 255, 0.12)', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>EMAIL ENQUIRIES</div>
                    <a href="mailto:contact@wenwix.com" style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', wordBreak: 'break-all' }}>contact@wenwix.com</a>
                  </div>
                </div>

                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}>
                  <div style={{ padding: '0.65rem', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.12)', color: 'var(--accent-amber)', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>PHONE / WHATSAPP</div>
                    <a href="tel:+917579583868" style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>+91 75795 83868</a>
                  </div>
                </div>

                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}>
                  <div style={{ padding: '0.65rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-green)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>HEADQUARTERS LOCATION</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>India</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <Clock size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Response Time: Typically within 1 business day.</span>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-form-card"
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'rgba(16,185,129,0.15)', 
                    color: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>Enquiry Sent Successfully</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Thank you for reaching out to Wenwix Technologies. Our team will review your requirements and follow up via email or phone shortly.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', service: 'HR Software', message: '' }); }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: '1.75rem', fontSize: '1.5rem' }}>Send an Enquiry</h3>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anish Sharma" 
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organization</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises" 
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anish@company.com" 
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210" 
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Primary Service Interest</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="HR Software">HR Software</option>
                      <option value="Tally & Accounting">Tally & Accounting Services</option>
                      <option value="360° Virtual Tour">360° Virtual Tour</option>
                      <option value="Other">Other / Technology Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">How can we help you? *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements or what you are trying to improve..." 
                      className="form-textarea"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={loading}
                    style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
