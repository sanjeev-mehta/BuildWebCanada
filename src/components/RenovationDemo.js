import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RenovationDemo.css';
import renovationImage from '../Assets/renovation-hero-original.png';
import TemplateHeroMotion from './TemplateHeroMotion';

const details = [['Kitchen', 'A more generous place to cook, gather, and linger.'], ['Living', 'Rooms with better rhythm, light, and breathing space.'], ['Whole home', 'A cohesive new chapter, shaped around everyday life.']];

export default function RenovationDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => { const o = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); o.unobserve(entry.target); } }), { threshold: .15 }); document.querySelectorAll('.reno-reveal').forEach((element) => o.observe(element)); return () => o.disconnect(); }, []);
  return <main className="reno-demo">
    <header className="reno-nav"><Link to="/web-templates">← Templates</Link><strong>STUDIO / RENEW</strong><a href="#contact-reno">Start a conversation ↗</a></header>
    <section className="reno-hero"><TemplateHeroMotion variant="renovation" /><div className="reno-hero-copy"><p>Residential renovation studio</p><h1>Home,<br /><i>reconsidered.</i></h1><span>Vancouver · Est. 2012</span></div><div className="reno-hero-image"><img src={renovationImage} alt="Original refined home renovation interior" fetchPriority="high" /><a href="#contact-reno">Plan your renovation <b>↗</b></a></div></section>
    <section className="reno-intro reno-reveal"><p className="reno-kicker">A different kind of transformation</p><div><h2>Designed around<br />the life <i>already happening.</i></h2><p>Studio / Renew is a fictional renovation company. This page uses sample copy and a dummy contact experience to show how a renovation brand can feel personal, precise, and warm.</p></div></section>
    <section className="reno-details"><p className="reno-kicker">Where we make a difference</p><div className="reno-detail-grid">{details.map(([title, copy], index) => <article className="reno-reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}</div></section>
    <section className="reno-contact reno-reveal" id="contact-reno"><div><p className="reno-kicker">A home worth coming back to</p><h2>Begin with<br />a <i>good question.</i></h2></div><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — no information was sent.'); }}><input placeholder="Your name" /><input type="email" placeholder="Email address" /><select defaultValue=""><option value="" disabled>What are you planning?</option><option>Kitchen renovation</option><option>Whole home renovation</option><option>Interior refresh</option></select><button type="submit">Request a consultation ↗</button>{notice && <p role="status">{notice}</p>}</form></section>
    <footer className="reno-footer"><strong>STUDIO / RENEW</strong><span>Fictional renovation studio · Vancouver, BC</span><small>© {new Date().getFullYear()} BuildWebCanada. All rights reserved.</small><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
