import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PhotographyDemo.css';
import hero from '../Assets/photography-hero-original.png';
import coast from '../Assets/photography-coast-original.png';

export default function PhotographyDemo() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .13 });
    document.querySelectorAll('.photo-reveal').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <main className="photo-demo">
    <header className="photo-nav"><Link to="/web-templates" className="photo-logo">LUMEN<br />STORIES</Link><nav><a href="#photo-work">Work</a><a href="#photo-about">About</a><a href="#photo-inquire">Inquire</a></nav><a href="#photo-inquire">Begin your story <span>↗</span></a></header>
    <section className="photo-hero"><img src={hero} alt="Original candlelit wedding editorial" fetchPriority="high" /><div className="photo-veil" /><div className="photo-hero-copy"><p>Wedding & editorial photography</p><h1>Feel it<br /><i>all again.</i></h1><a href="#photo-work">View selected work <b>↓</b></a></div><span className="photo-count">01 / 04</span></section>
    <section className="photo-manifesto photo-reveal" id="photo-about"><p>For the wildly devoted</p><h2>Images with<br />a <i>pulse.</i></h2><span>Every celebration has an atmosphere all its own. Lumen Stories is a fictional photography studio designed to hold onto the glances, movement, and feeling that make it yours.</span></section>
    <section className="photo-work" id="photo-work"><div className="photo-work-head photo-reveal"><p>Selected stories</p><h2>Love, in its<br /><i>own light.</i></h2></div><div className="photo-grid"><article className="photo-reveal"><img src={hero} alt="Original conservatory celebration" /><h3><b>01</b> The midnight conservatory</h3></article><article className="photo-reveal photo-coast"><img src={coast} alt="Original coastal wedding scene" /><h3><b>02</b> Salt air & vows</h3></article><article className="photo-reveal photo-detail"><img src={hero} alt="Original wedding detail" /><h3><b>03</b> After the last toast</h3></article></div></section>
    <section className="photo-quote"><p className="photo-reveal">“There is a kind of magic in remembering exactly how it felt.”</p><span className="photo-reveal">— A quiet promise from Lumen Stories</span></section>
    <section className="photo-inquire" id="photo-inquire"><img src={coast} alt="" /><div className="photo-inquire-copy photo-reveal"><p>Now booking 2026</p><h2>Let’s make<br />something <i>lasting.</i></h2><a href="mailto:hello@example.com">Start an inquiry <b>↗</b></a><small>Demo template · no form submission</small></div></section>
    <footer className="photo-footer"><strong>LUMEN STORIES</strong><span>Fictional photography template · Vancouver, BC</span><small>© {new Date().getFullYear()} BuildWebCanada. All rights reserved.</small><Link to="/web-templates">All templates</Link></footer>
  </main>;
}
