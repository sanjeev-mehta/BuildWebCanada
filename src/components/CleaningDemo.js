import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CleaningDemo.css';
import office from '../Assets/cleaning-office.jpg';
import TemplateHeroMotion from './TemplateHeroMotion';

const services = [
  ['Office care', 'A thoughtful, consistent clean for focused teams.', 'Weekly plans · Shared spaces · Restrooms'],
  ['Deep refresh', 'A meticulous reset for the places that need it most.', 'Kitchens · Details · One-time visits'],
  ['Move services', 'A fresh start for every handoff, arrival, and new chapter.', 'Move-in · Move-out · Flexible timing'],
  ['Retail spaces', 'Spotless customer-facing spaces, ready for every opening.', 'Floors · Glass · High-touch areas'],
];

export default function CleaningDemo() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.14, rootMargin: '0px 0px -45px' });
    document.querySelectorAll('.clean-reveal, .clean-stagger').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const submitDemo = (event) => { event.preventDefault(); setMessage('Demo only — no request was sent or saved.'); };
  return <main className="cleaning-demo">
    <header className="clean-nav"><Link to="/web-templates">← Templates</Link><span className="clean-brand">BRIGHTSPACE</span><nav><a href="#services">Services</a><a href="#estimate">About</a></nav><a href="#estimate" className="clean-nav-cta">Get an estimate</a></header>
    <section className="clean-hero"><img src={office} alt="Bright modern office" fetchPriority="high" /><div className="clean-veil"></div><TemplateHeroMotion variant="cleaning" /><div className="clean-hero-content"><p>Care for your space, made simple</p><h1>A cleaner space.<br /><i>A clearer day.</i></h1><a href="#estimate">Get a free estimate <span>→</span></a></div></section>
    <section className="clean-intro clean-reveal"><p className="clean-kicker">Thoughtful cleaning, every visit</p><h2>Details matter.<br />So do <i>your standards.</i></h2><p>Brightspace is a fictional cleaning studio created to demonstrate this template. Every name, detail, and service listed here is sample content.</p></section>
    <section className="clean-services clean-reveal" id="services"><div className="clean-section-heading"><p className="clean-kicker">What we do</p><h2>Spaces that feel<br /><i>good to be in.</i></h2></div><div className="clean-service-grid">{services.map(([title, copy, tags], index) => <article className="clean-stagger" key={title} style={{ '--delay': `${index * 90}ms` }}><div className="clean-card-image"><img src={office} alt="" loading="lazy" decoding="async" /></div><div><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><small>{tags}</small></div></article>)}</div></section>
    <section className="clean-estimate clean-reveal" id="estimate"><div><p className="clean-kicker">Let’s get started</p><h2>Get your<br /><i>sample estimate.</i></h2><p>This form is purely visual. It does not submit information, trigger emails, or connect to any service.</p></div><form onSubmit={submitDemo}><label>Your name<input placeholder="Alex Morgan" /></label><label>Email address<input type="email" placeholder="alex@example.com" /></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Office care</option><option>Deep refresh</option><option>Move services</option></select></label><button type="submit">Request estimate <span>→</span></button>{message && <p className="clean-message" role="status">{message}</p>}</form></section>
    <footer className="clean-footer"><span>BRIGHTSPACE</span><p>Sample business · Vancouver, BC · (604) 555-0128</p><small>© {new Date().getFullYear()} BuildWebCanada. All rights reserved.</small><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
