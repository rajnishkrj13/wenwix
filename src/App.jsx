import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import HRSoftware from './pages/HRSoftware';
import TallyServices from './pages/TallyServices';
import VirtualTours from './pages/VirtualTours';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CursorEffect />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hr-software" element={<HRSoftware />} />
          <Route path="/tally-accounting" element={<TallyServices />} />
          <Route path="/360-virtual-tours" element={<VirtualTours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
