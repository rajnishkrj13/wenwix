import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calculator, 
  Compass, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Eye, 
  Cpu, 
  Smartphone, 
  Sparkles,
  Server,
  Zap,
  Building2,
  CalendarCheck
} from 'lucide-react';
import '../styles/MasterBannerSlider.css';

export default function MasterBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const tabsWrapperRef = useRef(null);
  const tabsRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Scroll active tab into view strictly inside the wrapper (no page shift)
  useEffect(() => {
    if (tabsWrapperRef.current && tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector('.master-banner-tab-btn.active');
      if (activeBtn) {
        const wrapper = tabsWrapperRef.current;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        wrapper.scrollTo({
          left: Math.max(0, btnLeft - (wrapperWidth / 2) + (btnWidth / 2)),
          behavior: 'smooth'
        });
      }
    }
  }, [current]);

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  const slides = [
    {
      id: 'ecosystem',
      category: 'Ecosystem',
      badge: 'Wenwix Technologies',
      badgeDotColor: '#0066ff',
      accentColor: '#0066ff',
      accentGlow: 'radial-gradient(ellipse at center, rgba(0, 102, 255, 0.22) 0%, rgba(8, 10, 14, 0) 70%)',
      heading: 'Technology that makes everyday business',
      highlight: 'simpler.',
      desc: 'From automating employee operations and reconciling financial ledgers to 4K virtual tours and custom web platforms, Wenwix builds practical, scalable systems.',
      metrics: [
        { icon: Layers, text: '4 Integrated Services' },
        { icon: ShieldCheck, text: 'Enterprise Grade' },
        { icon: Activity, text: '99.9% Reliable' }
      ],
      primaryCta: { text: 'Talk to Us', to: '/contact' },
      secondaryCta: { text: 'Explore Services', to: '#services', isAnchor: true },
      visualType: 'ecosystem'
    },
    {
      id: 'hr',
      category: 'HR Software',
      badge: 'Smart Workforce Platform',
      badgeDotColor: '#38bdf8',
      accentColor: '#38bdf8',
      accentGlow: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.22) 0%, rgba(8, 10, 14, 0) 70%)',
      heading: 'Next-gen HR & automated payroll',
      highlight: 'software.',
      desc: 'Eliminate attendance errors and payroll bottlenecks. Centralize employee records, biometric logs, multi-shift rosters, and 1-click salary calculations on one intuitive platform.',
      metrics: [
        { icon: Clock, text: 'Real-Time Biometrics' },
        { icon: CheckCircle2, text: '1-Click Payroll' },
        { icon: Users, text: 'Self-Service Portal' }
      ],
      primaryCta: { text: 'Explore HR Software', to: '/hr-software' },
      secondaryCta: { text: 'Schedule a Demo', to: '/contact' },
      visualType: 'hr'
    },
    {
      id: 'tally',
      category: 'Tally & Accounts',
      badge: 'Financial Precision & Compliance',
      badgeDotColor: '#f59e0b',
      accentColor: '#f59e0b',
      accentGlow: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.2) 0%, rgba(8, 10, 14, 0) 70%)',
      heading: 'Professional Tally bookkeeping & GST',
      highlight: 'compliance.',
      desc: 'Achieve total financial clarity. We manage day-to-day ledger vouchers, bank and party reconciliations, organized balance sheets, and audit-ready GST filing on schedule.',
      metrics: [
        { icon: Calculator, text: '100% Reconciled' },
        { icon: BarChart3, text: 'Weekly MIS Reports' },
        { icon: ShieldCheck, text: 'GST & Tax Ready' }
      ],
      primaryCta: { text: 'Explore Accounting', to: '/tally-accounting' },
      secondaryCta: { text: 'Get Financial Help', to: '/contact' },
      visualType: 'tally'
    },
    {
      id: 'tours',
      category: '360° Virtual Tours',
      badge: 'Interactive Spatial Media',
      badgeDotColor: '#00c8ff',
      accentColor: '#00c8ff',
      accentGlow: 'radial-gradient(ellipse at center, rgba(0, 200, 255, 0.22) 0%, rgba(8, 10, 14, 0) 70%)',
      heading: 'Immersive 360° virtual tours for physical',
      highlight: 'spaces.',
      desc: 'Give hotels, schools, universities, and commercial properties an unforgettable digital walkthrough. High-resolution 4K panoramic media, clickable hotspots, and Google Street View sync.',
      metrics: [
        { icon: Compass, text: '4K Ultra-HD HDR' },
        { icon: Eye, text: 'Interactive Hotspots' },
        { icon: Globe, text: 'Google Maps Ready' }
      ],
      primaryCta: { text: 'Explore Virtual Tours', to: '/360-virtual-tours' },
      secondaryCta: { text: 'Book Virtual Shoot', to: '/contact' },
      visualType: 'tours'
    },
    {
      id: 'webdev',
      category: 'Web & App Dev',
      badge: 'Full-Stack Engineering',
      badgeDotColor: '#10b981',
      accentColor: '#10b981',
      accentGlow: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.22) 0%, rgba(8, 10, 14, 0) 70%)',
      heading: 'High-performance web & mobile',
      highlight: 'applications.',
      desc: 'Build scalable modern applications with fast load speeds, secure cloud architecture, and sleek user interfaces tailored to your organization’s growth goals.',
      metrics: [
        { icon: Cpu, text: 'React & Modern Tech' },
        { icon: Smartphone, text: 'iOS & Android Ready' },
        { icon: Zap, text: 'Sub-100ms Latency' }
      ],
      primaryCta: { text: 'Start Your Project', to: '/contact' },
      secondaryCta: { text: 'View Capabilities', to: '#services', isAnchor: true },
      visualType: 'webdev'
    }
  ];

  const totalSlides = slides.length;

  const goToSlide = useCallback((index, newDir = 1) => {
    setDirection(newDir);
    setCurrent(index);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);


  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeSlide = slides[current];

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 }
      }
    })
  };

  // Render Visual Card for each slide
  const renderVisualCard = (type) => {
    switch (type) {
      case 'hr':
        return (
          <div className="master-banner-card" style={{ '--slide-accent': activeSlide.accentColor }}>
            <div className="master-banner-card-glow" style={{ background: activeSlide.accentColor }} />
            <div className="master-banner-card-header">
              <span className="master-banner-card-title">
                <Users size={16} style={{ color: activeSlide.accentColor }} />
                <span>HR WORKFORCE MONITOR</span>
              </span>
              <span 
                className="master-banner-card-status-dot" 
                style={{ background: 'var(--accent-green)', color: 'var(--accent-green)' }} 
              />
            </div>

            {/* Stat Counters */}
            <div className="stat-box-grid">
              <div className="stat-box">
                <div className="stat-box-label">Present Today</div>
                <div className="stat-box-value">96.8%</div>
                <div className="stat-box-sub">
                  <Activity size={12} />
                  <span>48 / 50 Active</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-box-label">Biometric Sync</div>
                <div className="stat-box-value" style={{ color: 'var(--accent-cyan)' }}>Real-time</div>
                <div className="stat-box-sub" style={{ color: 'var(--text-muted)' }}>
                  <Zap size={12} />
                  <span>Sub-second punch</span>
                </div>
              </div>
            </div>

            {/* Live Activity Items */}
            <div className="activity-mini-list">
              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Sarah Chen • Lead Engineer</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Check-in verified via Face ID</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  09:02 AM
                </span>
              </div>

              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-amber)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Leave Request • 2 Days Paid</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Operations Team • Awaiting manager</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  Auto-routed
                </span>
              </div>
            </div>

            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              borderRadius: 'var(--radius-sm)', 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px dashed var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Payroll Cycle: Ready for 1-Click Run</span>
              <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>0 Errors Found</span>
            </div>
          </div>
        );

      case 'tally':
        return (
          <div className="master-banner-card" style={{ '--slide-accent': activeSlide.accentColor }}>
            <div className="master-banner-card-glow" style={{ background: activeSlide.accentColor }} />
            <div className="master-banner-card-header">
              <span className="master-banner-card-title">
                <Calculator size={16} style={{ color: activeSlide.accentColor }} />
                <span>FINANCIAL LEDGER & TALLY PRIME</span>
              </span>
              <span 
                className="master-banner-card-status-dot" 
                style={{ background: 'var(--accent-amber)', color: 'var(--accent-amber)' }} 
              />
            </div>

            {/* Stat Counters */}
            <div className="stat-box-grid">
              <div className="stat-box">
                <div className="stat-box-label">Bank Reconciliation</div>
                <div className="stat-box-value" style={{ color: '#f59e0b' }}>100%</div>
                <div className="stat-box-sub">
                  <CheckCircle2 size={12} />
                  <span>All Accounts Balanced</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-box-label">GST Compliance</div>
                <div className="stat-box-value">GSTR-1 & 3B</div>
                <div className="stat-box-sub">
                  <ShieldCheck size={12} />
                  <span>Audit-Ready Format</span>
                </div>
              </div>
            </div>

            {/* Accounting Rows */}
            <div className="activity-mini-list">
              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <BarChart3 size={15} style={{ color: '#f59e0b' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Customer Ledgers Synced</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Automated outstanding aging breakdown</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  Verified
                </span>
              </div>

              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-green)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Voucher Entry Audit</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Sales, purchase & expense allocations</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  Matched
                </span>
              </div>
            </div>

            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              borderRadius: 'var(--radius-sm)', 
              background: 'rgba(245, 158, 11, 0.05)', 
              border: '1px solid rgba(245, 158, 11, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Daily Bookkeeping Assistance:</span>
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>Zero Tax Deadlines Missed</span>
            </div>
          </div>
        );

      case 'tours':
        return (
          <div className="master-banner-card" style={{ '--slide-accent': activeSlide.accentColor }}>
            <div className="master-banner-card-glow" style={{ background: activeSlide.accentColor }} />
            <div className="master-banner-card-header">
              <span className="master-banner-card-title">
                <Compass size={16} style={{ color: activeSlide.accentColor }} />
                <span>360° SPATIAL VIEWER ENGINE</span>
              </span>
              <span 
                className="master-banner-card-status-dot" 
                style={{ background: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }} 
              />
            </div>

            {/* Spatial Simulator View */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.1) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(0, 200, 255, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  ACTIVE NODE: HOTEL SUITE // 4K HDR
                </span>
                <span style={{ 
                  fontSize: '0.7rem', 
                  padding: '0.2rem 0.6rem', 
                  background: 'rgba(0, 200, 255, 0.2)', 
                  borderRadius: '100px',
                  color: '#fff' 
                }}>
                  360° Rotational
                </span>
              </div>

              {/* Hotspots Simulation */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  padding: '0.3rem 0.65rem', 
                  background: 'rgba(0,0,0,0.5)', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                  <span>Main Ballroom</span>
                </div>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  padding: '0.3rem 0.65rem', 
                  background: 'rgba(0,0,0,0.5)', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-green)' }} />
                  <span>Campus Auditorium</span>
                </div>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  padding: '0.3rem 0.65rem', 
                  background: 'rgba(0,0,0,0.5)', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-amber)' }} />
                  <span>Banquet Hall</span>
                </div>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="stat-box-grid" style={{ marginBottom: 0 }}>
              <div className="stat-box">
                <div className="stat-box-label">Resolution</div>
                <div className="stat-box-value" style={{ color: 'var(--accent-cyan)' }}>4K HDR</div>
                <div className="stat-box-sub">
                  <Eye size={12} />
                  <span>Crystal Clear Spatial</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-box-label">Embedding</div>
                <div className="stat-box-value">Maps Ready</div>
                <div className="stat-box-sub">
                  <Globe size={12} />
                  <span>Web & Street View</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'webdev':
        return (
          <div className="master-banner-card" style={{ '--slide-accent': activeSlide.accentColor }}>
            <div className="master-banner-card-glow" style={{ background: activeSlide.accentColor }} />
            <div className="master-banner-card-header">
              <span className="master-banner-card-title">
                <Globe size={16} style={{ color: activeSlide.accentColor }} />
                <span>CLOUD ARCHITECTURE & APPS</span>
              </span>
              <span 
                className="master-banner-card-status-dot" 
                style={{ background: 'var(--accent-green)', color: 'var(--accent-green)' }} 
              />
            </div>

            {/* Stat Counters */}
            <div className="stat-box-grid">
              <div className="stat-box">
                <div className="stat-box-label">Edge Latency</div>
                <div className="stat-box-value" style={{ color: 'var(--accent-green)' }}>42 ms</div>
                <div className="stat-box-sub">
                  <Zap size={12} />
                  <span>Ultra-fast load time</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-box-label">Platform Support</div>
                <div className="stat-box-value">iOS + Web</div>
                <div className="stat-box-sub">
                  <Smartphone size={12} />
                  <span>Multi-Screen Responsive</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="activity-mini-list">
              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <Cpu size={15} style={{ color: 'var(--accent-green)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Modern Frontend & Core</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>React 19 • Next.js • Vite • Clean Vanilla CSS</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  Optimized
                </span>
              </div>

              <div className="activity-mini-item">
                <div className="activity-mini-left">
                  <Server size={15} style={{ color: 'var(--accent-cyan)' }} />
                  <div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>Secure Cloud Backends</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Scalable APIs, Auth Guards & SSL Encryption</div>
                  </div>
                </div>
                <span className="activity-mini-pill" style={{ background: 'rgba(0, 200, 255, 0.15)', color: '#00c8ff' }}>
                  Encrypted
                </span>
              </div>
            </div>

            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              borderRadius: 'var(--radius-sm)', 
              background: 'rgba(16, 185, 129, 0.05)', 
              border: '1px solid rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Build Pipeline Status:</span>
              <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Production Ready (Zero Downtime)</span>
            </div>
          </div>
        );

      default: // Ecosystem
        return (
          <div className="master-banner-card" style={{ '--slide-accent': activeSlide.accentColor }}>
            <div className="master-banner-card-glow" style={{ background: activeSlide.accentColor }} />
            <div className="master-banner-card-header">
              <span className="master-banner-card-title">
                <Layers size={16} style={{ color: activeSlide.accentColor }} />
                <span>WENWIX UNIFIED ENTERPRISE STACK</span>
              </span>
              <span 
                className="master-banner-card-status-dot" 
                style={{ background: 'var(--accent-green)', color: 'var(--accent-green)' }} 
              />
            </div>

            {/* Interconnected Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              
              <div className="visual-node-row">
                <div className="visual-node-icon" style={{ background: 'rgba(0, 102, 255, 0.15)', color: '#38bdf8' }}>
                  <Users size={20} />
                </div>
                <div className="visual-node-text">
                  <h4>People & Operations</h4>
                  <span>HR Software • Biometric Attendance • Leave & Payroll</span>
                </div>
              </div>

              <div className="visual-node-row">
                <div className="visual-node-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  <Calculator size={20} />
                </div>
                <div className="visual-node-text">
                  <h4>Finance & Accounting</h4>
                  <span>Tally Support • Ledger Audits • Reconciliation • GST</span>
                </div>
              </div>

              <div className="visual-node-row">
                <div className="visual-node-icon" style={{ background: 'rgba(0, 200, 255, 0.15)', color: '#00c8ff' }}>
                  <Compass size={20} />
                </div>
                <div className="visual-node-text">
                  <h4>360° Digital Experiences</h4>
                  <span>Virtual Tours • 4K Panoramic Spatial Media • Maps</span>
                </div>
              </div>

              <div className="visual-node-row">
                <div className="visual-node-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <Globe size={20} />
                </div>
                <div className="visual-node-text">
                  <h4>Web & App Engineering</h4>
                  <span>Bespoke Platforms • High-Conversion Business Portals</span>
                </div>
              </div>

            </div>
          </div>
        );
    }
  };

  return (
    <section 
      className="master-banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Master Banner Carousel"
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="master-banner-ambient"
        style={{ background: activeSlide.accentGlow }}
      />
      <div className="master-banner-grid-overlay" />

      <div className="master-banner-container">
        
        {/* Top Category Pill Tabs Switcher */}
        <div className="master-banner-tabs-wrapper" ref={tabsWrapperRef}>
          <div className="master-banner-tabs" ref={tabsRef} role="tablist">
            {slides.map((slide, index) => {
              const isActive = current === index;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`master-banner-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(index, index > current ? 1 : -1)}
                  style={{
                    borderColor: isActive ? slide.accentColor : 'transparent'
                  }}
                >
                  <span 
                    className="master-banner-tab-num"
                    style={{ color: isActive ? slide.accentColor : 'var(--text-subtle)' }}
                  >
                    0{index + 1}
                  </span>
                  <span>{slide.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliding Main Content Area */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="master-banner-slide"
              style={{ '--slide-accent': activeSlide.accentColor }}
            >
              {/* Left Column: Heading, Subtext, Metrics, Buttons */}
              <div className="master-banner-content">
                
                <div className="master-banner-badge">
                  <span 
                    className="master-banner-badge-dot" 
                    style={{ background: activeSlide.badgeDotColor, boxShadow: `0 0 10px ${activeSlide.badgeDotColor}` }}
                  />
                  <span>{activeSlide.badge}</span>
                </div>

                <h1 className="master-banner-heading">
                  {activeSlide.heading}{' '}
                  <span className="master-banner-highlight">
                    {activeSlide.highlight}
                  </span>
                </h1>

                <p className="master-banner-desc">
                  {activeSlide.desc}
                </p>

                {/* Feature Metric Badges */}
                <div className="master-banner-metrics">
                  {activeSlide.metrics.map((metric, idx) => {
                    const IconComp = metric.icon;
                    return (
                      <div key={idx} className="master-banner-metric-pill">
                        <IconComp size={15} />
                        <span>{metric.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="master-banner-actions">
                  <Link to={activeSlide.primaryCta.to} className="btn btn-primary">
                    <span>{activeSlide.primaryCta.text}</span>
                    <ArrowRight size={16} className="btn-icon" />
                  </Link>

                  {activeSlide.secondaryCta.isAnchor ? (
                    <a href={activeSlide.secondaryCta.to} className="btn btn-secondary">
                      <span>{activeSlide.secondaryCta.text}</span>
                    </a>
                  ) : (
                    <Link to={activeSlide.secondaryCta.to} className="btn btn-secondary">
                      <span>{activeSlide.secondaryCta.text}</span>
                    </Link>
                  )}
                </div>

              </div>

              {/* Right Column: Dynamic Visual Mockup / Card */}
              <div className="master-banner-visual-wrapper">
                {renderVisualCard(activeSlide.visualType)}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Banner Navigation Controls & Progress */}
        <div className="master-banner-footer">
          
          {/* Arrow Buttons */}
          <div className="master-banner-nav-arrows">
            <button 
              type="button"
              className="master-banner-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous slide"
              title="Previous slide (Left Arrow)"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              type="button"
              className="master-banner-arrow-btn"
              onClick={handleNext}
              aria-label="Next slide"
              title="Next slide (Right Arrow)"
            >
              <ChevronRight size={20} />
            </button>

            {/* Play / Pause Toggle */}
            <button
              type="button"
              className="master-banner-autoplay-toggle"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
              title={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
              <span>{isPaused ? 'Paused' : 'Auto'}</span>
            </button>
          </div>

          {/* Dots Indicator with Progress Fill */}
          <div className="master-banner-indicators" role="tablist" aria-label="Slide indicators">
            {slides.map((s, index) => {
              const isActive = current === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`master-banner-dot-btn ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(index, index > current ? 1 : -1)}
                  aria-label={`Go to slide ${index + 1}: ${s.category}`}
                  aria-selected={isActive}
                >
                  {isActive && (
                    <motion.div
                      className="master-banner-progress-fill"
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '100%' : '100%' }}
                      transition={{ 
                        duration: isPaused ? 0 : SLIDE_DURATION / 1000, 
                        ease: 'linear' 
                      }}
                      key={current}
                      style={{ background: s.accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Slide Counter Label */}
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>0{current + 1}</span> / 0{totalSlides}
          </div>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="master-banner-touch-hint">
          Swipe left or right to explore services
        </div>

      </div>
    </section>
  );
}
