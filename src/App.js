import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { useLocation } from 'react-router-dom';

function HomeContent({ cursorPos }) {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <Testimonials />
      <CaseStudies />
      <Approach />
      <TechStack />
      <Process />
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
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
    }
  }, [location]);

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent cursorPos={cursorPos} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
