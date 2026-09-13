import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TattooDemo.css';
import hero from '../Assets/tattoo-hero-original.png';
import TemplateHeroMotion from './TemplateHeroMotion';

const sessions = [
  ['Thu, Sept 18', '11:00 AM', 'Fine line / 2 hrs'],
  ['Fri, Sept 19', '2:30 PM', 'Custom piece / 3 hrs'],
  ['Sat, Sept 20', '12:00 PM', 'Flash / 1.5 hrs'],
  ['Tue, Sept 23', '4:00 PM', 'Consultation / 45 min'],
];

export default function TattooDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => { const o = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); o.unobserve(entry.target); } }), { threshold: .16 }); document.querySelectorAll('.ink-reveal').forEach((element) => o.observe(element)); return () => o.disconnect(); }, []);
  return <main className="tattoo-demo">
    <header className="ink-nav"><Link to="/web-templates">← Templates</Link><strong>NOCTURNE<br />STUDIO</strong><a href="#book">Book a session ↗</a></header>
    <section className="ink-hero"><img src={hero} alt="Original tattoo studio still life" fetchPriority="high" /><div className="ink-hero-shade"></div><TemplateHeroMotion variant="tattoo" /><div><p>Custom tattooing · Vancouver</p><h1>Wear your<br /><i>story.</i></h1><a href="#sessions">View available sessions</a></div><span>✦ 01 / 03</span><aside><span>NOCTURNE</span><i></i><span>EST. 2026</span></aside></section>
    <section className="ink-intro ink-reveal"><span className="ink-star">✦</span><p>Fine line, blackwork & botanical studies</p><h2>Art that stays<br /><i>with you.</i></h2><small>Nocturne Studio is a fictional tattoo artist profile. All content and booking options are for demonstration only.</small></section>
    <section className="ink-styles"><article className="ink-reveal"><span>01</span><h3>Fine line</h3><p>Delicate, precise, and quietly personal.</p></article><article className="ink-reveal"><span>02</span><h3>Botanical</h3><p>Wild forms, soft shadows, and organic movement.</p></article><article className="ink-reveal"><span>03</span><h3>Blackwork</h3><p>Strong graphic marks with an enduring edge.</p></article></section>
    <section className="ink-sessions ink-reveal" id="sessions"><div className="ink-session-heading"><p>Next available sessions</p><h2>Find your<br /><i>time.</i></h2><small>Availability shown below is a visual demo and does not represent real appointments.</small></div><div className="ink-session-list">{sessions.map(([date, time, type], index) => <a href="#book" key={date} className="ink-session"><span>0{index + 1}</span><div><strong>{date}</strong><small>{type}</small></div><b>{time}</b><i>↗</i></a>)}</div></section>
    <section className="ink-book ink-reveal" id="book"><div><p>Bookings / 2026</p><h2>Make it<br /><i>permanent.</i></h2></div><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — no booking request was sent.'); }}><input placeholder="Your name" /><input type="email" placeholder="Email address" /><select defaultValue=""><option value="" disabled>Preferred style</option><option>Fine line</option><option>Botanical</option><option>Blackwork</option></select><button type="submit">Request a session ↗</button>{notice && <small role="status">{notice}</small>}</form></section>
    <footer className="ink-footer"><strong>NOCTURNE STUDIO</strong><span>Fictional tattoo studio · Vancouver, BC</span><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
