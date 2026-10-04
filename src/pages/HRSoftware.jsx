import React, { useState } from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { 
  Users, 
  Clock, 
  CalendarDays, 
  FileSpreadsheet, 
  BarChart3, 
  CheckCircle2, 
  UserPlus, 
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HRSoftware() {
  const [activeTab, setActiveTab] = useState('attendance');

  const hrFeatures = [
    {
      id: 'employee',
      icon: Users,
      title: 'Employee Management',
      subtitle: 'Centralized Master Directory',
      desc: 'Maintain accurate employee records from onboarding to offboarding.',
      points: [
        'Detailed Employee Profiles & Personal Records',
        'Department & Organizational Hierarchy',
        'Designation & Grade Mapping',
        'Date of Joining, Probation & Confirmation Tracking',
        'Secure Digital Document Storage & Vault'
      ]
    },
    {
      id: 'attendance',
      icon: Clock,
      title: 'Attendance Management',
      subtitle: 'Real-time Tracking & Shifts',
      desc: 'Track daily attendance across office branches, remote teams, and field sites.',
      points: [
        'Daily Attendance Marking & Biometric Integration',
        'Multi-shift Scheduling & Rotation Management',
        'Web & Mobile Check-in / Check-out Logs',
        'Late Arrival & Early Departure Automated Tracking',
        'Comprehensive Daily & Monthly Attendance Reports'
      ]
    },
    {
      id: 'leave',
      icon: CalendarDays,
      title: 'Leave Management',
      subtitle: 'Automated Approval Workflows',
      desc: 'Streamline leave applications and balance tracking without manual spreadsheets.',
      points: [
        'Online Leave Application & Multi-level Approvals',
        'Custom Leave Types (Casual, Sick, Paid, Earned)',
        'Real-time Leave Balance Calculation',
        'Company Holiday Calendar & Regional Schedules',
        'Automated Email & System Notifications'
      ]
    },
    {
      id: 'payroll',
      icon: FileSpreadsheet,
      title: 'Payroll Support Workflows',
      subtitle: 'Structured Salary Processing',
      desc: 'Calculate salary structures based on verified attendance and leave data.',
      points: [
        'Employee Salary Structure Configuration',
        'Attendance-linked Payroll Calculation Workflows',
        'Historical Salary Records & Pay Slip Generation Support',
        'Deduction & Allowance Ledger Organization',
        'Exportable Bank Disbursement Statements'
      ]
    },
    {
      id: 'reports',
      icon: BarChart3,
      title: 'HR Reports & Analytics',
      subtitle: 'Actionable Workforce Summaries',
      desc: 'Gain clarity on workforce metrics, absenteeism, and department productivity.',
      points: [
        'Detailed Monthly Attendance & Loss of Pay (LOP) Summaries',
        'Employee Turnaround & Strength Reports',
        'Leave Utilization & Pattern Analysis',
        'Department-wise HR Operations Summaries',
        'One-click Excel & PDF Export Capabilities'
      ]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HR Software Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Wenwix Technologies"
    },
    "serviceType": "HR Management Software",
    "description": "Centralized HR platform for employee management, attendance tracking, leave workflows, and payroll support."
  };

  return (
    <>
      <SEO 
        title="HR Software for Attendance, Leave & Employee Management | Wenwix Technologies"
        description="Explore HR software solutions from Wenwix Technologies for employee management, attendance, leave, payroll workflows and HR operations."
        keywords="HR software, employee management software, attendance management software, leave management software, HR management system, payroll support workflow"
        canonical="https://wenwix.com/hr-software"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="hero-section-padding">
        <div className="container">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="badge-pill">
                <span className="badge-dot" />
                <span>Service 01 // HR Software</span>
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>
                HR management without the paperwork.
              </h1>
              <p style={{ marginBottom: '2.25rem' }}>
                A centralized HR platform designed to simplify employee information, attendance, leave and everyday HR operations for growing teams.
              </p>
              <div className="btn-group">
                <Button to="/contact" variant="primary">
                  Talk to Wenwix
                </Button>
                <a href="#features" className="btn btn-secondary">
                  <span>View Features</span>
                </a>
              </div>
            </motion.div>

            {/* Interactive HR Software UI Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
              }}
            >
              {/* Window Bar */}
              <div style={{ 
                background: 'var(--bg-dark-elevated)', 
                padding: '0.85rem 1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)' 
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  wenwix-hr.portal // dashboard
                </span>
                <span className="badge-pill" style={{ margin: 0, padding: '0.15rem 0.6rem', fontSize: '0.7rem' }}>LIVE</span>
              </div>

              {/* Software Mockup Body */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>Employee Operations Dashboard</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Real-time attendance & shift status</p>
                  </div>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(0,102,255,0.12)', color: '#38bdf8', padding: '0.3rem 0.75rem', borderRadius: '6px', fontWeight: 600 }}>
                    Shift: General 09:00 - 18:00
                  </span>
                </div>

                {/* Dashboard Stats */}
                <div className="hr-stats-grid">
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Total Staff</div>
                    <div className="stat-value" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>148</div>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)' }}>Present</div>
                    <div className="stat-value" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-green)' }}>141</div>
                  </div>
                  <div style={{ background: 'rgba(245,158,11,0.08)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.2)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-amber)' }}>Leave</div>
                    <div className="stat-value" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-amber)' }}>7</div>
                  </div>
                </div>

                {/* Attendance Log Snippet */}
                <div style={{ background: 'var(--bg-dark)', borderRadius: '8px', padding: '1rem', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem' }}>Recent Check-in Logs</div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#fff' }}>Ramesh Kumar (Engineering)</span>
                    <span style={{ color: 'var(--accent-green)' }}>08:54 AM • On Time</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#fff' }}>Priya Sharma (Operations)</span>
                    <span style={{ color: 'var(--accent-green)' }}>08:58 AM • On Time</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.4rem 0' }}>
                    <span style={{ color: '#fff' }}>Anish Verma (Accounts)</span>
                    <span style={{ color: 'var(--accent-amber)' }}>09:14 AM • Late (+14m)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Deep Dive */}
      <section id="features" className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Complete HR Capabilities"
            title="Designed for operational clarity."
            description="Explore the full spectrum of HR management modules configured in Wenwix HR software."
          />

          {/* Interactive Feature Selector Tabs */}
          <div className="feature-tabs-container">
            {hrFeatures.map((f) => {
              const IconComp = f.icon;
              const isActive = activeTab === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  style={{
                    padding: '0.75rem 1.35rem',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-light)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <IconComp size={18} />
                  <span>{f.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Display Card */}
          {hrFeatures.filter(f => f.id === activeTab).map((feature) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="feature-detail-card"
            >
              <div>
                <span className="badge-pill" style={{ marginBottom: '1rem' }}>{feature.subtitle}</span>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>{feature.desc}</p>
                
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {feature.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', shrink: 0, marginTop: '3px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Specific Visual Box */}
              <div style={{
                background: 'var(--bg-dark)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-cyan)' }}>
                  <feature.icon size={28} />
                  <h4 style={{ color: '#fff' }}>Module Overview</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Eliminate manual record-keeping with centralized data structures tailored for your company policy.
                </p>
                <div style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '1.25rem', 
                  borderRadius: '8px', 
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  borderLeft: '3px solid var(--accent-primary)'
                }}>
                  "Centralizing our employee records and attendance reduced administrative effort by over 70%."
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional HR Modules Grid */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            badge="Practical Architecture"
            title="Built around daily HR workflows."
            description="Key functional components engineered to keep team operations organized and compliant."
          />

          <div className="card-grid-3">
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <UserPlus size={28} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Employee Onboarding</h4>
              <p style={{ fontSize: '0.92rem' }}>Capture personal details, emergency contacts, tax IDs, and document copies digitally upon joining.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Clock size={28} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Shift & Late Rules</h4>
              <p style={{ fontSize: '0.92rem' }}>Configure grace periods, late mark penalties, overtime approvals, and custom weekend rules.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <FileText size={28} style={{ color: 'var(--accent-amber)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Payslip Generation</h4>
              <p style={{ fontSize: '0.92rem' }}>Generate structured monthly salary slips and export payout registers for direct bank upload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Page CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <span className="badge-dot" />
            <span>Ready to Modernize HR?</span>
          </span>
          <h2 style={{ marginBottom: '1.25rem' }}>Looking for a better way to manage HR?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Tell us about your team size and attendance workflow. We'll set up a tailored walkthrough for your organization.
          </p>
          <Button to="/contact" variant="primary">
            Talk to Wenwix
          </Button>
        </div>
      </section>
    </>
  );
}
