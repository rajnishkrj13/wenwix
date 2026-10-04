import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { 
  Calculator, 
  BookOpen, 
  CheckCircle2, 
  FileCheck2, 
  TrendingUp, 
  Receipt, 
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TallyServices() {
  const tallyModules = [
    {
      icon: Calculator,
      title: 'Tally Setup & Configuration',
      desc: 'Complete initialization and structural setup of Tally for your business entities.',
      items: [
        'Tally Prime company creation & chart of accounts',
        'Voucher type customization & numbering rules',
        'Inventory master setup & unit configuration',
        'Multi-branch and godown ledger configuration'
      ]
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping & Data Entry',
      desc: 'Systematic daily recording of financial transactions into your ledger accounts.',
      items: [
        'Daily sales and purchase voucher entries',
        'Bank and cash payment/receipt voucher recording',
        'Operational expense tracking & allocation',
        'Vendor bill posting & payment schedule tracking'
      ]
    },
    {
      icon: FileCheck2,
      title: 'Ledger & Bank Reconciliation',
      desc: 'Eliminate balance discrepancies with periodic account matching.',
      items: [
        'Monthly bank statement reconciliation',
        'Vendor ledger matching & statement verification',
        'Customer outstanding balance reconciliation',
        'Unadjusted voucher and suspense entry cleanup'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Financial MIS & Analytics',
      desc: 'Clear decision-ready financial reports to monitor business cash flow.',
      items: [
        'Receivable & Payable ageing analysis',
        'Daily cash flow & liquidity summaries',
        'Trial Balance, Profit & Loss structure reviews',
        'Custom management information system (MIS) reports'
      ]
    },
    {
      icon: Receipt,
      title: 'GST & Compliance Data Prep',
      desc: 'Structured organization of sales, purchase, and tax ledgers for filing.',
      items: [
        'GSTR-1 sales data compilation & verification',
        'GSTR-2B purchase reconciliation support',
        'E-way bill & E-invoicing data organization',
        'Preparation of audit-ready digital ledger files'
      ]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tally & Accounting Services",
    "provider": {
      "@type": "Organization",
      "name": "Wenwix Technologies"
    },
    "serviceType": "Accounting & Bookkeeping Support",
    "description": "Tally setup, bookkeeping assistance, bank reconciliation, financial MIS reporting, and accounting data preparation."
  };

  return (
    <>
      <SEO 
        title="Tally & Accounting Services for Businesses | Wenwix Technologies"
        description="Tally and accounting support including bookkeeping, ledger management, reconciliation, financial data organization and reporting."
        keywords="Tally services, Tally accounting services, bookkeeping services, accounting support, business accounting services, bank reconciliation, MIS reports"
        canonical="https://wenwix.com/tally-accounting"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="hero-section-padding">
        <div className="container">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="badge-pill">
                <span className="badge-dot" />
                <span>Service 02 // Accounting Solutions</span>
              </div>
              <h1 style={{ marginBottom: '1.5rem' }}>
                Keep your accounts organized and your business moving.
              </h1>
              <p style={{ marginBottom: '2.25rem' }}>
                Structured Tally support, daily bookkeeping assistance, account reconciliation, and clean financial reports for modern enterprises.
              </p>
              <div className="btn-group">
                <Button to="/contact" variant="primary">
                  Discuss Your Requirements
                </Button>
                <a href="#accounting-services" className="btn btn-secondary">
                  <span>Explore Services</span>
                </a>
              </div>
            </motion.div>

            {/* Financial Ledger Aesthetic Visual Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-visual-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-amber)' }}>
                  FINANCIAL LEDGER // TALLY SUMMARY
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>FY 2026-27</span>
              </div>

              {/* Financial Table Mockup */}
              <div className="table-responsive-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Particulars</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Voucher Type</th>
                      <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.75rem 1rem', color: '#fff' }}>Commercial Sales A/c</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Sales Invoice</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--accent-green)', fontWeight: 600 }}>+ 4,85,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.75rem 1rem', color: '#fff' }}>Vendor Purchase Ledger</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Purchase Entry</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--text-muted)' }}>- 1,62,400</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.75rem 1rem', color: '#fff' }}>Operational Expenses</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>Payment Voucher</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--text-muted)' }}>- 48,200</td>
                    </tr>
                    <tr style={{ background: 'rgba(0,102,255,0.06)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#fff' }}>Net Reconciled Balance</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--accent-cyan)' }}>Bank Ledger</td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right', color: 'var(--accent-cyan)', fontWeight: 700 }}>₹ 2,74,400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                <span>Ledger entries verified & bank accounts fully reconciled.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="accounting-services" className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Accounting Capabilities"
            title="Comprehensive bookkeeping & Tally solutions."
            description="We assist businesses with structured record management, ledger hygiene, and financial clarity."
          />

          <div className="card-grid-2">
            {tallyModules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  className="hover-expand"
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ 
                        padding: '0.75rem', 
                        borderRadius: '10px', 
                        background: 'rgba(245, 158, 11, 0.12)', 
                        color: 'var(--accent-amber)',
                        border: '1px solid rgba(245, 158, 11, 0.2)' 
                      }}>
                        <IconComp size={24} />
                      </div>
                      <h3>{mod.title}</h3>
                    </div>

                    <p style={{ marginBottom: '1.75rem' }}>{mod.desc}</p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {mod.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.93rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--accent-amber)', shrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Notice Disclaimer Section */}
      <section className="section-padding">
        <div className="container">
          <div className="notice-banner">
            <AlertCircle size={28} style={{ color: 'var(--accent-amber)', shrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: 'var(--accent-amber)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                Accounting Data Preparation & Support Notice
              </h4>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Wenwix Technologies provides operational Tally setup, data entry, bookkeeping assistance, and financial ledger organization services. 
                We operate as your dedicated technology and accounting data entry partner to keep your books organized. 
                Official statutory tax filings and legal audits should be performed by your appointed Chartered Accountant (CA) or certified tax practitioner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <span className="badge-dot" />
            <span>Structured Financial Books</span>
          </span>
          <h2 style={{ marginBottom: '1.25rem' }}>Need help keeping your accounts in order?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Connect with our Tally specialists to discuss your daily transaction volume, reconciliation requirements, and reporting workflow.
          </p>
          <Button to="/contact" variant="primary">
            Discuss Your Requirements
          </Button>
        </div>
      </section>
    </>
  );
}
