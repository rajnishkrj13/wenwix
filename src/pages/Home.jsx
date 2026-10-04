import React from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import MasterBannerSlider from '../components/MasterBannerSlider';
import ContactCTA from '../components/ContactCTA';
import { 
  Users, 
  Calculator, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Headphones, 
  Building2, 
  GraduationCap, 
  Hotel, 
  Store, 
  Briefcase, 
  Rocket, 
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const industries = [
    { name: 'Hotels & Resorts', icon: Hotel, desc: '360° virtual tours for suites, banquet halls & facilities.' },
    { name: 'Schools & K-12', icon: GraduationCap, desc: 'Virtual campus navigation & administrative HR tools.' },
    { name: 'Colleges & Universities', icon: Building2, desc: 'Interactive department tours & staff roster systems.' },
    { name: 'Small & Medium Businesses', icon: Briefcase, desc: 'Tally bookkeeping support & simplified attendance.' },
    { name: 'Startups & Tech Teams', icon: Rocket, desc: 'Scalable HR processes and streamlined expense tracking.' },
    { name: 'Service Businesses', icon: Users, desc: 'Client ledger management and structured operations.' },
    { name: 'Retail & Trading', icon: Store, desc: 'Inventory ledgers, GST prep & daily sales bookkeeping.' },
  ];

  const processSteps = [
    { num: '01', title: 'Understand', text: 'We analyze your current operations, software pain points, and specific workflows.' },
    { num: '02', title: 'Plan', text: 'Define the right technology stack, system configuration, or virtual tour capture scope.' },
    { num: '03', title: 'Build & Rollout', text: 'Configure HR systems, setup Tally structures, or publish interactive 360° media.' },
    { num: '04', title: 'Support', text: 'Provide dedicated ongoing assistance, maintenance, and operational guidance.' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wenwix Technologies",
    "url": "https://wenwix.com",
    "description": "Technology, Business & Digital Experience Solutions specializing in HR software, Tally accounting support, and 360° virtual tours.",
    "knowsAbout": [
      "HR Software",
      "Employee Attendance & Leave Systems",
      "Tally Accounting Services",
      "Bookkeeping Support",
      "360 Virtual Tours",
      "Website Development",
      "Mobile App Development"
    ]
  };

  return (
    <>
      <SEO 
        title="Wenwix Technologies | Technology, Business & Digital Experience Solutions"
        description="Wenwix Technologies builds practical technology solutions for modern businesses: HR Software, Tally & Accounting Support, and 360° Virtual Tours."
        schemaData={schema}
      />

      {/* Responsive Master Banner Slider */}
      <MasterBannerSlider />

      {/* Trust / Introduction Section */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Practical Approach"
            title="Built around the way businesses actually work."
            description="We eliminate unnecessary technology complexity by combining custom business software, structured accounting data support, and high-impact digital experiences."
            align="center"
          />

          {/* Key Value Metrics Grid */}
          <div className="card-grid-4" style={{ marginTop: '3rem' }}>
            <div style={{ padding: '1.75rem', background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <ShieldCheck size={28} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Business-Focused</h4>
              <p style={{ fontSize: '0.9rem' }}>Designed around real daily operational requirements, not hype.</p>
            </div>

            <div style={{ padding: '1.75rem', background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Headphones size={28} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Responsive Support</h4>
              <p style={{ fontSize: '0.9rem' }}>Direct technical & accounting assistance whenever you need help.</p>
            </div>

            <div style={{ padding: '1.75rem', background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Layers size={28} style={{ color: 'var(--accent-amber)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Scalable Systems</h4>
              <p style={{ fontSize: '0.9rem' }}>Solutions that naturally expand as your business footprint grows.</p>
            </div>

            <div style={{ padding: '1.75rem', background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <CheckCircle2 size={28} style={{ color: 'var(--accent-green)', marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Practical Delivery</h4>
              <p style={{ fontSize: '0.9rem' }}>Structured deployment timelines with transparent execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <SectionHeading 
            badge="Core Solutions"
            title="Four services. One technology partner."
            description="Explore our specialized services built to modernize your management, financial clarity, digital presence, and online growth."
          />

          <div className="card-grid-2">
            <ServiceCard 
              number="SERVICE 01"
              title="HR Software"
              description="Manage employees, attendance, leave, payroll workflows and everyday HR operations through a centralized platform."
              btnText="Explore HR Software"
              link="/hr-software"
              icon={Users}
              highlights={[
                'Employee Database & Onboarding',
                'Biometric & Mobile Attendance',
                'Leave & Holiday Approvals',
                'Payroll & Salary Workflow'
              ]}
            />

            <ServiceCard 
              number="SERVICE 02"
              title="Tally & Accounting Services"
              description="Simplify accounting operations with Tally support, bookkeeping assistance, reconciliation and financial data management."
              btnText="Explore Accounting Services"
              link="/tally-accounting"
              icon={Calculator}
              highlights={[
                'Tally Setup & Configuration',
                'Daily Ledger & Voucher Entry',
                'Bank & Customer Reconciliation',
                'MIS Reporting & GST Data Prep'
              ]}
            />

            <ServiceCard 
              number="SERVICE 03"
              title="360° Virtual Tours"
              description="Give hotels, schools, colleges and other spaces an interactive digital presence with immersive 360° virtual tours."
              btnText="Explore Virtual Tours"
              link="/360-virtual-tours"
              icon={Compass}
              highlights={[
                '4K Panoramic Spatial Capture',
                'Interactive Hotspots & Popups',
                'Website & Google Maps Embed',
                'Mobile-Responsive 360° Player'
              ]}
            />

            <ServiceCard 
              number="SERVICE 04"
              title="Website & App Development"
              description="Get custom-built websites, mobile applications, and business portals designed for performance, scalability, and a premium user experience."
              btnText="Discuss Your Project"
              link="/contact"
              icon={Globe}
              highlights={[
                'Responsive Business Websites',
                'Android & iOS Mobile Apps',
                'Admin Dashboards & Portals',
                'E-commerce & Booking Systems'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Wenwix Section */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Our Principles"
            title="Technology should solve problems, not create more of them."
            description="We build and manage solutions with a strict focus on standard usability, reliability, and clear human communication."
            align="center"
          />

          <div className="card-grid-4">
            <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>01 // USABILITY</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Practical</h3>
              <p style={{ fontSize: '0.93rem' }}>Solutions designed strictly around real business workflows rather than abstract feature bloat.</p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>02 // STABILITY</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Reliable</h3>
              <p style={{ fontSize: '0.93rem' }}>Stable systems, rigorous data accuracy, and structured procedures for daily operations.</p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>03 // ARCHITECTURE</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Scalable</h3>
              <p style={{ fontSize: '0.93rem' }}>Modular solutions engineered to support growing staff sizes and expanding location branches.</p>
            </div>

            <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-green)', marginBottom: '0.75rem' }}>04 // SUPPORT</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Human</h3>
              <p style={{ fontSize: '0.93rem' }}>Real support specialists who understand business context instead of complicated technical jargon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            badge="Industries Served"
            title="Tailored solutions for distinct business sectors."
            description="Whether showcasing physical facilities or managing internal accounting, we serve diverse operational verticals."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.75rem',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-expand"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0, 102, 255, 0.1)', color: 'var(--accent-cyan)' }}>
                      <IconComp size={20} />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>{ind.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem' }}>{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Engagement Model"
            title="From requirement to rollout."
            description="A disciplined 4-step framework ensuring transparent execution and dependable long-term results."
          />

          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA />
    </>
  );
}
