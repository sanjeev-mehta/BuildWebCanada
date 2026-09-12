import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RenovationDemo.css';
import renovationImage from '../Assets/renovation-hero-original.png';

const phases = [['01', 'Discover', 'We listen closely to the life you want your space to support.'], ['02', 'Refine', 'Design details, scope, and materials come into crisp focus.'], ['03', 'Transform', 'A well-run build brings the new vision to life.']];

export default function RenovationDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => { const o = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); o.unobserve(entry.target); } }), { threshold: .15 }); document.querySelectorAll('.reno-reveal').forEach((element) => o.observe(element)); return () => o.disconnect(); }, []);
  return <main className="reno-demo">
    <header className="reno-nav"><Link to="/web-templates">← Templates</Link><strong>STUDIO / RENEW</strong><nav><a href="#process">Process</a><a href="#contact-reno">Contact</a></nav><a href="#contact-reno">Plan your project ↗</a></header>
    <section className="reno-hero"><img src={renovationImage} alt="Contemporary home renovation" fetchPriority="high" /><div></div><section><p>Thoughtful renovation · Vancouver</p><h1>Make room<br />for <i>what’s next.</i></h1><a href="#contact-reno">Tell us about your home ↗</a></section></section>
    <section className="reno-intro reno-reveal"><p className="reno-kicker">Homes, reimagined</p><h2>Every familiar room<br />has a <i>future in it.</i></h2><p>Studio / Renew is a fictional renovation company made for this template. Its details, services, and contact information are all sample content.</p></section>
    <section className="reno-process" id="process"><div className="reno-reveal"><p className="reno-kicker">How we work</p><h2>A calmer way<br />to <i>change everything.</i></h2></div><div>{phases.map(([number, title, copy]) => <article className="reno-reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="reno-contact reno-reveal" id="contact-reno"><div><p className="reno-kicker">Start with a conversation</p><h2>Your next<br />chapter <i>starts here.</i></h2></div><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — no information was sent.'); }}><label>Name<input placeholder="Alex Morgan" /></label><label>Email<input type="email" placeholder="alex@example.com" /></label><label>Project<select defaultValue=""><option value="" disabled>Choose a project type</option><option>Kitchen renovation</option><option>Whole home renovation</option><option>Interior refresh</option></select></label><button type="submit">Request a consultation ↗</button>{notice && <p role="status">{notice}</p>}</form></section>
    <footer className="reno-footer"><strong>STUDIO / RENEW</strong><span>Fictional renovation studio · Vancouver, BC</span><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
