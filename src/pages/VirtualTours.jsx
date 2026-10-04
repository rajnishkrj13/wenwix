import React, { useState } from 'react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { 
  Compass, 
  Hotel, 
  GraduationCap, 
  Building2, 
  Store, 
  MapPin, 
  Info, 
  Smartphone, 
  Code, 
  Camera, 
  ArrowRight,
  Move3d,
  ZoomIn,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

/* ── 3D Hotspot rendered inside the sphere ── */
const Hotspot3D = ({ hs, isActive, onClick }) => {
  const isNav = Boolean(hs.navigateTo);

  return (
    <Html position={hs.position} center zIndexRange={[100, 0]}>
      <div 
        style={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          pointerEvents: 'auto',
          userSelect: 'none'
        }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onClick(hs); }}
          style={{
            width: isNav ? '46px' : '38px',
            height: isNav ? '46px' : '38px',
            borderRadius: '50%',
            background: isNav
              ? 'linear-gradient(135deg, #00e5ff 0%, #0066ff 100%)'
              : isActive
                ? 'rgba(0, 102, 255, 0.95)'
                : 'rgba(0, 200, 255, 0.85)',
            border: isNav ? '3px solid #ffffff' : '2.5px solid #ffffff',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: isNav
              ? '0 0 25px rgba(0, 229, 255, 0.9), 0 0 50px rgba(0, 102, 255, 0.7)'
              : isActive
                ? '0 0 25px rgba(0, 102, 255, 0.9), 0 0 50px rgba(0, 102, 255, 0.4)'
                : '0 0 18px rgba(0, 200, 255, 0.7)',
            transform: isActive ? 'scale(1.2)' : 'scale(1)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: isNav ? 'navHotspotPulse 2s ease-in-out infinite' : 'hotspotPulse 2s ease-in-out infinite'
          }}
          aria-label={isNav ? `Navigate: ${hs.title}` : `View info: ${hs.title}`}
        >
          {isNav ? (
            /* Navigation door / forward icon */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
            </svg>
          )}
        </button>

        {/* Floating pill label for navigation hotspots */}
        {isNav && (
          <div
            onClick={(e) => { e.stopPropagation(); onClick(hs); }}
            style={{
              marginTop: '8px',
              padding: '4px 12px',
              background: 'rgba(6, 11, 22, 0.92)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0, 229, 255, 0.7)',
              borderRadius: '20px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6), 0 0 15px rgba(0,229,255,0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>{hs.navLabel || hs.title}</span>
            <span style={{ color: '#00e5ff', fontSize: '14px', fontWeight: 'bold' }}>→</span>
          </div>
        )}
      </div>
    </Html>
  );
};

/* ── Inner panorama sphere + orbit controls ── */
const PanoramaSphere = ({ image, hotspots, activeHotspot, onHotspotClick }) => {
  const texture = useTexture(image);

  return (
    <>
      <ambientLight intensity={1} />
      <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </Sphere>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={0.1}
        maxDistance={100}
        rotateSpeed={-0.4}
        zoomSpeed={0.5}
      />
      {hotspots.map((hs) => (
        <Hotspot3D
          key={hs.id}
          hs={hs}
          isActive={activeHotspot?.id === hs.id}
          onClick={onHotspotClick}
        />
      ))}
    </>
  );
};

export default function VirtualTours() {
  const [activeTourScene, setActiveTourScene] = useState('hotel-lobby');
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [navNotification, setNavNotification] = useState('');

  const scenes = {
    'hotel-lobby': {
      name: 'Grand Hotel Lobby & Reception',
      badge: 'Hotels & Hospitality',
      category: 'hotel',
      image: '/panoramas/hotel-lobby.jpg',
      description: 'Step into the grand hotel lobby featuring high ceilings, concierge reception desk, and atrium lounge seating.',
      hotspots: [
        { 
          id: 'hl-to-room', 
          position: [-380, -20, 260], 
          title: 'Walk to Deluxe Suite 304', 
          info: 'Walk directly through to private luxury guest suite 304 on the executive floor.',
          navigateTo: 'hotel-room',
          navLabel: 'Walk to Suite 304'
        },
        { 
          id: 'hl-desk', 
          position: [360, -30, -300], 
          title: 'Concierge & Reception', 
          info: '24/7 guest relations, express digital key check-in, valet dispatch, and luggage assistance.' 
        },
        { 
          id: 'hl-lounge', 
          position: [180, -50, 420], 
          title: 'Atrium Lounge & Bar', 
          info: 'Complimentary welcome drinks, afternoon tea, and evening live acoustic sets in a serene setting.' 
        },
        { 
          id: 'hl-elevator', 
          position: [-320, 40, -360], 
          title: 'Executive Elevators', 
          info: 'High-speed smart elevators with keycard-restricted access to private guest floors.' 
        }
      ],
      facilities: ['Grand Lobby', 'Concierge Desk', 'Atrium Lounge', 'Executive Elevators', 'Valet Parking']
    },
    'hotel-room': {
      name: 'Deluxe Suite — Room 304',
      badge: 'Hotels & Hospitality',
      category: 'hotel',
      image: '/panoramas/hotel-room.jpg',
      description: 'Explore a fully furnished luxury hotel suite with king plush bed, ergonomic executive workspace, and ambient lighting.',
      hotspots: [
        { 
          id: 'hr-to-lobby', 
          position: [20, -50, 460], 
          title: 'Exit to Grand Lobby', 
          info: 'Return to the main hotel lobby, concierge reception desk, and atrium lounge.',
          navigateTo: 'hotel-lobby',
          navLabel: 'Exit to Grand Lobby'
        },
        { 
          id: 'hr-bed', 
          position: [320, -20, -350], 
          title: 'King Size Plush Bed', 
          info: 'Premium Egyptian cotton linens with memory foam mattress, custom velvet headboard, and dual reading lamps.' 
        },
        { 
          id: 'hr-desk', 
          position: [-400, 10, 190], 
          title: 'Executive Workstation', 
          info: 'Ergonomic task chair, universal international sockets, high-speed Wi-Fi, and workspace lamp.' 
        },
        { 
          id: 'hr-lighting', 
          position: [-50, 150, -400], 
          title: 'Smart Ambient Lighting', 
          info: 'Adjustable dimming mood lighting scenes: Warm Evening, Focus Mode, and Morning Glow.' 
        }
      ],
      facilities: ['King Bed Suite', 'Workstation Desk', 'Smart Climate & Lighting', 'High-Speed Wi-Fi', 'Ensuite Bathroom']
    },
    'school-hall': {
      name: 'School Auditorium & Stage',
      badge: 'Schools & K-12 Education',
      category: 'school',
      image: '/panoramas/school-hall.jpg',
      description: 'Step onto the school auditorium stage with theatrical overhead lighting, wooden acoustics, and multi-tier student seating.',
      hotspots: [
        { 
          id: 'sh-to-campus', 
          position: [50, -40, 450], 
          title: 'Walk to STEM Exhibition Hall', 
          info: 'Walk through the connecting corridor to the interactive STEM exhibition gallery and student science labs.',
          navigateTo: 'school-campus',
          navLabel: 'Walk to STEM Hall'
        },
        { 
          id: 'sh-stage', 
          position: [0, 20, -450], 
          title: 'Acoustic Proscenium Stage', 
          info: 'Engineered hardwood performance stage for annual plays, debates, awards, and music concerts.' 
        },
        { 
          id: 'sh-lights', 
          position: [150, 160, -350], 
          title: 'DMX Theatrical Lighting', 
          info: 'Fully automated computerized spotlighting and spatial acoustic surround sound system.' 
        },
        { 
          id: 'sh-seating', 
          position: [-280, -50, 360], 
          title: 'Tiered Auditorium Seating', 
          info: 'Cushioned tiered seating accommodating up to 600 students, faculty, and visiting parents.' 
        }
      ],
      facilities: ['Auditorium Stage', 'Tiered Seating', 'DMX Lighting Rig', 'Acoustic Wall Panels', 'Sound Booth']
    },
    'school-campus': {
      name: 'STEM Exhibition & Learning Gallery',
      badge: 'Schools & K-12 Education',
      category: 'school',
      image: '/panoramas/school.jpg',
      description: 'Allow prospective parents to explore STEM science displays, robotics projects, and interactive student learning stations.',
      hotspots: [
        { 
          id: 'sc-to-hall', 
          position: [-200, -30, -420], 
          title: 'Exit to Auditorium & Stage', 
          info: 'Return to the main school auditorium and performing arts stage.',
          navigateTo: 'school-hall',
          navLabel: 'Exit to Auditorium'
        },
        { 
          id: 's1', 
          position: [120, -50, 440], 
          title: 'Interactive Science Displays', 
          info: 'Hands-on physics and chemistry exhibits designed for collaborative student experiments.' 
        },
        { 
          id: 's2', 
          position: [380, 80, 120], 
          title: 'Modern Campus Architecture', 
          info: 'Sustainably designed campus spaces with high air-flow ventilation and natural illumination.' 
        },
        { 
          id: 's3', 
          position: [-320, -20, -320], 
          title: 'Campus Reception & Orientation', 
          info: 'Visitor check-in area with interactive digital touchscreens for self-guided campus navigation.' 
        }
      ],
      facilities: ['STEM Science Exhibits', 'Robotics Hub', 'Discovery Stations', 'Interactive Touch Kiosks', 'Faculty Lounge']
    },
    'college-library': {
      name: 'University Library & Reading Atrium',
      badge: 'Higher Education & Colleges',
      category: 'college',
      image: '/panoramas/commercial.jpg',
      description: 'Showcase soaring multi-level reading atriums, digital research terminals, journal archives, and study pods.',
      hotspots: [
        { 
          id: 'cl-to-theater', 
          position: [340, -20, -300], 
          title: 'Walk to Grand Lecture Theater', 
          info: 'Walk through the academic skybridge directly into the 850-seat university keynote auditorium.',
          navigateTo: 'college-auditorium',
          navLabel: 'Walk to Lecture Theater'
        },
        { 
          id: 'c1', 
          position: [180, 70, -420], 
          title: 'Multi-Level Reading Atrium', 
          info: 'Open reading pavilion spanning three floors with natural skylight illumination and silent zones.' 
        },
        { 
          id: 'c2', 
          position: [-240, -60, 380], 
          title: 'Digital Journal Archives', 
          info: 'High-speed terminals providing access to over 200,000 international peer-reviewed journals.' 
        },
        { 
          id: 'c3', 
          position: [-340, 40, -240], 
          title: 'Research Collaboration Pods', 
          info: 'Acoustically isolated group study rooms equipped with 4K interactive presentation boards.' 
        }
      ],
      facilities: ['3-Floor Reading Atrium', 'Digital Terminals', 'Research Archive', 'Collaboration Pods', 'Silent Study Carrels']
    },
    'college-auditorium': {
      name: 'Grand Lecture Theater & Auditorium',
      badge: 'Higher Education & Colleges',
      category: 'college',
      image: '/panoramas/college-auditorium.jpg',
      description: 'Explore the premier university theater for international guest lectures, convocations, and academic symposia.',
      hotspots: [
        { 
          id: 'ca-to-library', 
          position: [30, -50, 450], 
          title: 'Exit to University Library', 
          info: 'Return through the skybridge to the central library reading atrium and digital archives.',
          navigateTo: 'college-library',
          navLabel: 'Exit to Library Atrium'
        },
        { 
          id: 'ca-stage', 
          position: [0, 10, -460], 
          title: 'Keynote Stage & Podium', 
          info: 'Motorized dual 4K laser projector screens, surround acoustic panels, and smart speaker lectern.' 
        },
        { 
          id: 'ca-av', 
          position: [-340, 40, -270], 
          title: 'Broadcast & AV Production Room', 
          info: 'Integrated lecture-capture system recording HD video feeds for hybrid remote learning.' 
        },
        { 
          id: 'ca-seating', 
          position: [300, -40, 360], 
          title: 'Tiered Seating Gallery', 
          info: 'Ergonomic seating for 850 attendees with individual fold-out laptop desks and charging ports.' 
        }
      ],
      facilities: ['850-Seat Keynote Hall', 'Motorized 4K Screens', 'HD Lecture Recording', 'Stage Audio System', 'Acoustic Architecture']
    },
    commercial: {
      name: 'Corporate HQ & Control Room',
      badge: 'Commercial & Retail',
      category: 'commercial',
      image: '/panoramas/college.jpg',
      description: 'Highlight modern office interiors, luxury retail showrooms, event venues, and training centers.',
      hotspots: [
        { id: 'm1', position: [-350, -80, 300], title: 'Operations Control Desk', info: 'Ergonomic dual-monitor workstations for real-time operations monitoring.' },
        { id: 'm2', position: [350, 40, -250], title: 'Conference Suite', info: 'Hybrid video conference setup with 4K display arrays and spatial audio.' }
      ],
      facilities: ['Executive Office Floors', 'Product Showrooms', 'Retail Outlets', 'Event Venues', 'Training Centers']
    }
  };

  const currentScene = scenes[activeTourScene] || scenes['hotel-lobby'];
  const currentCategory = currentScene.category;

  const features = [
    { icon: Compass, title: 'Smooth 360° Navigation', desc: 'Seamless spherical panning with fluid touch and mouse controls.' },
    { icon: MapPin, title: 'Interactive Hotspots', desc: 'Clickable points highlighting room amenities, specs, or video clips.' },
    { icon: Info, title: 'Information Popups', desc: 'Rich overlays displaying photos, brochures, and pricing details.' },
    { icon: Code, title: 'Website & Maps Embedding', desc: 'Easily embed tours on your site or link directly inside Google Maps.' },
    { icon: Smartphone, title: 'Mobile-First Experience', desc: 'Optimized touch navigation that works flawlessly on iOS & Android.' },
    { icon: Camera, title: 'Pro HDR Photography', desc: 'High-resolution panorama stitching with balanced color profile.' }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "360° Virtual Tour Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Wenwix Technologies"
    },
    "serviceType": "360 Virtual Tours",
    "description": "Immersive 360° virtual tours for hotels, resorts, schools, colleges, and commercial spaces."
  };

  const switchScene = (sceneKey) => {
    setSelectedHotspot(null);
    const targetScene = scenes[sceneKey];
    if (targetScene) {
      setNavNotification(`Entering ${targetScene.name}...`);
      setTimeout(() => setNavNotification(''), 2200);
      setActiveTourScene(sceneKey);
    }
  };

  const handleHotspotClick = (hs) => {
    if (hs.navigateTo) {
      switchScene(hs.navigateTo);
      return;
    }
    setSelectedHotspot(selectedHotspot?.id === hs.id ? null : hs);
  };

  return (
    <>
      <SEO 
        title="360° Virtual Tours for Hotels, Schools & Colleges | Wenwix Technologies"
        description="Create immersive 360° virtual tours for hotels, schools, colleges, campuses and commercial spaces with Wenwix Technologies."
        keywords="360 virtual tour, hotel virtual tour, school virtual tour, college virtual tour, 360 panorama tour, interactive virtual tour, Google Maps virtual tour"
        canonical="https://wenwix.com/360-virtual-tours"
        schemaData={schema}
      />

      {/* Hotspot pulse animations */}
      <style>{`
        @keyframes hotspotPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(0, 200, 255, 0.7); }
          50% { box-shadow: 0 0 30px rgba(0, 200, 255, 1), 0 0 60px rgba(0, 200, 255, 0.3); }
        }
        @keyframes navHotspotPulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 229, 255, 0.8), 0 0 45px rgba(0, 102, 255, 0.5);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 35px rgba(0, 229, 255, 1), 0 0 70px rgba(0, 102, 255, 0.85);
            transform: scale(1.1);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section-padding">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <div className="badge-pill">
              <span className="badge-dot" />
              <span>Service 03 // Digital Experiences</span>
            </div>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Let people explore your space before they visit.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              Interactive 360° virtual tours help potential guests, students, parents and commercial clients experience your location remotely from any screen.
            </p>
          </div>

          {/* Interactive 360° Panorama Player */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 30px 70px rgba(0,0,0,0.8)'
          }}>
            {/* Tour Controls Top Bar */}
            <div className="tour-top-bar">
              <div>
                <span className="badge-pill" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                  {currentScene.badge}
                </span>
                <h3 style={{ fontSize: '1.2rem', marginTop: '0.25rem', color: '#fff' }}>{currentScene.name}</h3>

                {/* Sub-space switcher for multi-room industries (Hotel, School, College) */}
                {(() => {
                  const subSpacesConfig = {
                    hotel: [
                      { key: 'hotel-lobby', label: '🏛️ Grand Lobby' },
                      { key: 'hotel-room', label: '🛏️ Deluxe Suite 304' }
                    ],
                    school: [
                      { key: 'school-hall', label: '🎭 Auditorium & Stage' },
                      { key: 'school-campus', label: '🔬 STEM Exhibition Hall' }
                    ],
                    college: [
                      { key: 'college-library', label: '📚 Central Library Atrium' },
                      { key: 'college-auditorium', label: '🏛️ Grand Lecture Theater' }
                    ]
                  };

                  const currentSubSpaces = subSpacesConfig[currentCategory];
                  if (!currentSubSpaces) return null;

                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.65rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500, letterSpacing: '0.04em' }}>
                        {currentCategory.toUpperCase()} SPACES:
                      </span>
                      {currentSubSpaces.map((sub) => (
                        <button
                          key={sub.key}
                          onClick={() => switchScene(sub.key)}
                          style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '16px',
                            fontSize: '0.78rem',
                            cursor: 'pointer',
                            border: activeTourScene === sub.key ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.15)',
                            background: activeTourScene === sub.key ? 'rgba(0, 229, 255, 0.25)' : 'rgba(255,255,255,0.06)',
                            color: activeTourScene === sub.key ? '#00e5ff' : 'rgba(255,255,255,0.85)',
                            fontWeight: activeTourScene === sub.key ? 600 : 400,
                            transition: 'all 0.2s ease',
                            boxShadow: activeTourScene === sub.key ? '0 0 12px rgba(0, 229, 255, 0.3)' : 'none'
                          }}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Main Industry Scene Switcher Buttons */}
              <div className="tour-scene-buttons">
                {[
                  { category: 'hotel', defaultScene: 'hotel-lobby', icon: Hotel, label: 'Hotel' },
                  { category: 'school', defaultScene: 'school-hall', icon: GraduationCap, label: 'School' },
                  { category: 'college', defaultScene: 'college-library', icon: Building2, label: 'College' },
                  { category: 'commercial', defaultScene: 'commercial', icon: Store, label: 'Commercial' },
                ].map(({ category, defaultScene, icon: Icon, label }) => {
                  const isSelected = currentCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => switchScene(isSelected ? activeTourScene : defaultScene)}
                      className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 360 Panorama Canvas Container */}
            <div className="tour-canvas-container">
              <React.Suspense fallback={
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  background: '#0a0c10',
                  color: 'var(--accent-cyan)',
                  gap: '0.75rem',
                  fontSize: '1rem'
                }}>
                  <RotateCcw size={22} style={{ animation: 'spin 1s linear infinite' }} />
                  Loading 360° Panorama...
                </div>
              }>
                <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                  <PanoramaSphere
                    key={activeTourScene}
                    image={currentScene.image}
                    hotspots={currentScene.hotspots}
                    activeHotspot={selectedHotspot}
                    onHotspotClick={handleHotspotClick}
                  />
                </Canvas>
              </React.Suspense>

              {/* Nav Transition Notification */}
              <AnimatePresence>
                {navNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute',
                      top: '5.5rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0, 102, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid #00e5ff',
                      borderRadius: '30px',
                      padding: '0.5rem 1.25rem',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      zIndex: 25,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 20px rgba(0,229,255,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Compass size={16} style={{ animation: 'spin 2s linear infinite' }} />
                    <span>{navNotification}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hotspot Info Popup Overlay */}
              <AnimatePresence>
                {selectedHotspot && (
                  <motion.div
                    key={selectedHotspot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="tour-hotspot-popup"
                    style={{
                      border: selectedHotspot.navigateTo ? '1px solid rgba(0, 229, 255, 0.6)' : '1px solid rgba(0, 102, 255, 0.4)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <MapPin size={16} style={{ color: selectedHotspot.navigateTo ? '#00e5ff' : 'var(--accent-cyan)' }} />
                        <h4 style={{ fontSize: '1.05rem', color: '#fff' }}>{selectedHotspot.title}</h4>
                      </div>
                      <button 
                        onClick={() => setSelectedHotspot(null)}
                        style={{ color: 'var(--text-muted)', fontSize: '1.1rem', cursor: 'pointer', lineHeight: 1, padding: '2px 6px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}
                      >
                        ✕
                      </button>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: selectedHotspot.navigateTo ? '1rem' : 0 }}>
                      {selectedHotspot.info}
                    </p>
                    {selectedHotspot.navigateTo && (
                      <button
                        onClick={() => switchScene(selectedHotspot.navigateTo)}
                        className="btn btn-primary"
                        style={{ 
                          width: '100%', 
                          padding: '0.55rem 1rem', 
                          fontSize: '0.85rem', 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          background: 'linear-gradient(135deg, #0066ff, #00e5ff)'
                        }}
                      >
                        <span>Enter Room</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Usage hint overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 5
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.7rem',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <Move3d size={14} />
                  <span>Drag to look around</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.7rem',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <ZoomIn size={14} />
                  <span>Scroll to zoom</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="tour-bottom-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span>Click glowing hotspots to inspect facility details</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span>{currentScene.hotspots.length} hotspots</span>
                <span>•</span>
                <span>Responsive Embed Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Facility Scope Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <SectionHeading 
            badge="Versatile Coverage"
            title="Designed for spaces that need to stand out."
            description="We capture complete physical layouts with crisp lighting, logical navigation hotspots, and responsive web integration."
          />

          <div className="card-grid-2">
            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <Hotel size={26} style={{ color: 'var(--accent-cyan)' }} />
                <h3>Hotels & Resorts</h3>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Showcase guest suites, lobbies, banquet halls, and outdoor pools to boost online bookings.</p>
              <ul className="facility-grid">
                <li>• Executive Suites & Rooms</li>
                <li>• Lobby & Reception</li>
                <li>• Restaurants & Dining</li>
                <li>• Conference Halls</li>
                <li>• Swimming Pool & Gardens</li>
                <li>• Event Lawns</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={26} style={{ color: 'var(--accent-primary)' }} />
                <h3>Schools & K-12</h3>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Build trust with prospective parents by showcasing safe, modern educational infrastructure.</p>
              <ul className="facility-grid">
                <li>• Smart Classrooms</li>
                <li>• Science Laboratories</li>
                <li>• Library & Reading Hubs</li>
                <li>• Playground & Sports Turf</li>
                <li>• Art & Activity Rooms</li>
                <li>• Admission Office</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <Building2 size={26} style={{ color: 'var(--accent-amber)' }} />
                <h3>Colleges & Universities</h3>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Give out-of-station students a guided tour of departments, hostels, and campus life.</p>
              <ul className="facility-grid">
                <li>• Academic Departments</li>
                <li>• Research Labs</li>
                <li>• Student Hostels</li>
                <li>• Central Auditorium</li>
                <li>• Sports Complex</li>
                <li>• Campus Cafeteria</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <Store size={26} style={{ color: 'var(--accent-green)' }} />
                <h3>Commercial & Retail</h3>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Immerse retail clients and corporate tenants with high-resolution space walkthroughs.</p>
              <ul className="facility-grid">
                <li>• Corporate Office Floors</li>
                <li>• Luxury Product Showrooms</li>
                <li>• Retail Outlets</li>
                <li>• Training Centers</li>
                <li>• Event Venues</li>
                <li>• Co-working Spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown Grid */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            badge="Technical Features"
            title="Everything included in your 360° virtual tour."
            description="Our virtual tours are built for seamless performance on desktop, tablet, and mobile browsers."
          />

          <div className="card-grid-3">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <IconComp size={24} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
                  <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>{feat.title}</h4>
                  <p style={{ fontSize: '0.92rem' }}>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-elevated)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
            <span className="badge-dot" />
            <span>Interactive Media</span>
          </span>
          <h2 style={{ marginBottom: '1.25rem' }}>Ready to showcase your facility in 360°?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Tell us about your property location and room count. We'll provide a shoot timeline and demo preview.
          </p>
          <Button to="/contact" variant="primary">
            Talk to Wenwix
          </Button>
        </div>
      </section>
    </>
  );
}
