import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ConstructionDemo.css';
import hero from '../Assets/construction-hero-original.png';

const projects = [
  ['01', 'Private residences', 'Ground-up homes built around how you live.'],
  ['02', 'Commercial spaces', 'Distinctive places for ambitious businesses.'],
  ['03', 'Renovations', 'Considered transformations with a precise finish.'],
];

export default function ConstructionDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((items) => items.forEach((item) => {
      if (item.isIntersecting) { item.target.classList.add('is-visible'); observer.unobserve(item.target); }
    }), { threshold: .12 });
    document.querySelectorAll('.build-reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <main className="construction-demo">
    <header className="build-nav"><Link to="/web-templates">← Templates</Link><strong>FOUND / FORM</strong><nav><a href="#work">Work</a><a href="#approach">Approach</a><a href="#contact-build">Contact</a></nav><a href="#contact-build" className="build-nav-cta">Start a project ↗</a></header>
    <section className="build-hero"><img src={hero} alt="Original contemporary construction site" fetchPriority="high" /><div className="build-overlay"></div><div className="build-hero-copy"><p>Design · Build · Deliver</p><h1>Built with<br /><i>intention.</i></h1><a href="#contact-build">Discuss your project <span>↗</span></a></div><div className="build-coordinates">49° 16' N&nbsp;&nbsp; 123° 07' W</div></section>
    <section className="build-statement build-reveal" id="approach"><p className="build-label">01 / Our point of view</p><h2>Enduring spaces begin with a <i>clear idea.</i></h2><p>Found / Form is a fictional construction studio made for this template. We bring craftsmanship, transparency, and calm control to every stage of a build.</p></section>
    <section className="build-work" id="work"><div className="build-work-head build-reveal"><p className="build-label">02 / Selected capabilities</p><h2>Structure meets<br /><i>possibility.</i></h2></div><div className="build-project-list">{projects.map(([number, title, copy]) => <article className="build-reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div></section>
    <section className="build-contact build-reveal" id="contact-build"><div><p className="build-label">03 / Begin here</p><h2>Let’s make<br />something <i>solid.</i></h2></div><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — your details were not sent.'); }}><label>Name<input placeholder="Alex Morgan" /></label><label>Email<input type="email" placeholder="alex@example.com" /></label><label>Project type<select defaultValue=""><option value="" disabled>Select one</option><option>New build</option><option>Renovation</option><option>Commercial</option></select></label><button type="submit">Send inquiry ↗</button>{notice && <p role="status">{notice}</p>}</form></section>
    <footer className="build-footer"><strong>FOUND / FORM</strong><span>Fictional studio · Vancouver, BC</span><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
