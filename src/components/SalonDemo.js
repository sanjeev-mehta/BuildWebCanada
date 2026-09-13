import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SalonDemo.css';
import './SalonDemoOverrides.css';
import hero from '../Assets/salon-hero-original.png';
import portrait from '../Assets/salon-portrait-original.png';
import TemplateHeroMotion from './TemplateHeroMotion';

const services = [
  ['The Signature Cut', 'A tailored cut, refined around your features and routine.', '90 min · from $110', hero],
  ['Dimensional Colour', 'Luminous, lived-in colour with considered placement.', '3 hrs · from $240', portrait],
  ['The Finishing Touch', 'Gloss, treatment and styling for a polished reset.', '75 min · from $95', hero],
];

export default function SalonDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.14 });
    document.querySelectorAll('.salon-reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main className="salon-demo">
    <section className="salon-hero" id="home-salon">
      <img className="salon-hero-image" src={hero} alt="Original contemporary salon interior" fetchPriority="high" />
      <TemplateHeroMotion variant="salon" />
      <header className="salon-nav">
        <Link className="salon-mark" to="/web-templates" aria-label="Back to templates">ATELIER<br />MUSE</Link>
        <nav aria-label="Salon navigation"><a href="#home-salon">Home</a><a href="#about-salon">About</a><a href="#services-salon">Services</a><a href="#contact-salon">Contact</a></nav>
        <a className="salon-nav-cta" href="#book-salon">Book a session <span>↗</span></a>
      </header>
      <div className="salon-hero-copy salon-reveal"><p>Vancouver hair atelier</p><h1>The art of<br /><i>refined hair.</i></h1><a href="#services-salon">Discover our approach <span>↓</span></a></div>
      <p className="salon-side-note">Intentional hair. Personal ritual.</p>
    </section>

    <section className="salon-services" id="services-salon">
      <div className="salon-services-intro salon-reveal" id="about-salon"><p className="salon-kicker">Our services</p><h2>Made for the<br /><i>way you live.</i></h2><p>Beautiful hair should still feel like you. Our fictional atelier pairs expert technique with an unhurried, personal experience.</p><a href="#book-salon">Book now <span>↗</span></a></div>
      <div className="salon-card-grid">{services.map(([name, description, duration, image], index) => <article className={`salon-service-card salon-reveal service-${index + 1}`} key={name}><img src={image} alt="" /><div><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p><small>{duration}</small><a href="#book-salon" aria-label={`Book ${name}`}>↗</a></div></article>)}</div>
    </section>

    <section className="salon-stories"><div className="salon-stories-copy salon-reveal"><p className="salon-kicker">In their words</p><blockquote>“The rare kind of appointment where you leave feeling exactly like yourself—only brighter.”</blockquote><p className="salon-client">Maya K. · colour client</p><div className="salon-story-controls"><button aria-label="Previous testimonial">←</button><span>01 / 03</span><button aria-label="Next testimonial">→</button></div></div><div className="salon-stories-image salon-reveal"><img src={portrait} alt="Original editorial beauty portrait" /></div></section>

    <section className="salon-appointment" id="book-salon"><img src={hero} alt="" /><div className="salon-appointment-card salon-reveal" id="contact-salon"><div><p className="salon-kicker">Your appointment</p><h2>A little time<br />for <i>yourself.</i></h2><p>Choose a service and send a demo request. Nothing is submitted—this is a showcase template.</p><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — your request was not sent.'); }}><select defaultValue="" aria-label="Choose a service"><option value="" disabled>Choose a service</option><option>Signature Cut</option><option>Dimensional Colour</option><option>Finishing Touch</option></select><button type="submit">Request a session <span>↗</span></button></form>{notice && <small role="status">{notice}</small>}</div><img src={portrait} alt="Original beauty portrait" /></div></section>

    <footer className="salon-footer"><strong>ATELIER MUSE</strong><span>Fictional salon template · Vancouver, BC</span><Link to="/web-templates">All templates</Link></footer>
  </main>;
}
