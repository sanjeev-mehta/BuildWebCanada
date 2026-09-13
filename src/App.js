import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import 'lenis/dist/lenis.css';
import './App.css';
import Navbar from '../src/components/Navbar.js';
import Hero from '../src/components/Hero.js';
import About from '../src/components/About.js';
import Services from '../src/components/Services.js';
import Testimonials from '../src/components/Testimonials.js';
import CaseStudies from '../src/components/CaseStudies.js';
import Approach from '../src/components/Approach.js';
import TechStack from '../src/components/TechStack.js';
import Process from '../src/components/Process.js';
import Contact from '../src/components/Contact.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import WebTemplates from './components/WebTemplates.js';
import RestaurantDemo from './components/RestaurantDemo.js';
import CleaningDemo from './components/CleaningDemo.js';
import ItalianRestaurantDemo from './components/ItalianRestaurantDemo.js';
import ConstructionDemo from './components/ConstructionDemo.js';
import RenovationDemo from './components/RenovationDemo.js';
import TattooDemo from './components/TattooDemo.js';
import SalonDemo from './components/SalonDemo.js';
import LiquorStoreDemo from './components/LiquorStoreDemo.js';
import PhotographyDemo from './components/PhotographyDemo.js';
import { useLocation } from 'react-router-dom';

function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.14 });
  const reducedMotion = useReducedMotion();
  return <motion.div ref={ref} initial={reducedMotion ? false : { opacity: 0, y: 34 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reducedMotion ? 0 : 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}

function HomeContent({ cursorPos }) {
  return (
    <>
      <section id="home"><Hero /></section>
      <ScrollReveal><section id="services"><Services /></section></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><CaseStudies /></ScrollReveal>
      <ScrollReveal><Approach /></ScrollReveal>
      <ScrollReveal><TechStack /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><section id="about"><About /></section></ScrollReveal>
      <ScrollReveal><section id="contact"><Contact /></section></ScrollReveal>
      <Footer />
      <div
        className="cursor-follower"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
    </>
  );
}

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -70 }, duration: 0.72, smoothWheel: true, touchMultiplier: 1 });
    return () => lenis.destroy();
  }, [reducedMotion]);

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {!['/web-templates/restaurant', '/web-templates/cleaning', '/web-templates/italian-restaurant', '/web-templates/construction', '/web-templates/renovation', '/web-templates/tattoo-artist', '/web-templates/salon', '/web-templates/liquor-store', '/web-templates/photography'].includes(location.pathname) && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="route-transition" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? {} : { opacity: 0, y: -7 }} transition={{ duration: reducedMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}>
          <Routes location={location}>
            <Route path="/" element={<HomeContent cursorPos={cursorPos} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web-templates" element={<WebTemplates />} />
            <Route path="/web-templates/restaurant" element={<RestaurantDemo />} />
            <Route path="/web-templates/cleaning" element={<CleaningDemo />} />
            <Route path="/web-templates/italian-restaurant" element={<ItalianRestaurantDemo />} />
            <Route path="/web-templates/construction" element={<ConstructionDemo />} />
            <Route path="/web-templates/renovation" element={<RenovationDemo />} />
            <Route path="/web-templates/tattoo-artist" element={<TattooDemo />} />
            <Route path="/web-templates/salon" element={<SalonDemo />} />
            <Route path="/web-templates/liquor-store" element={<LiquorStoreDemo />} />
            <Route path="/web-templates/photography" element={<PhotographyDemo />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
