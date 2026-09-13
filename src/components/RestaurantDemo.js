import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantDemo.css';
import heroDish from '../Assets/urban-bites-hero.png';
import aboutDish from '../Assets/urban-bites-about.jpg';
import menuOne from '../Assets/urban-bites-menu-1.jpg';
import menuTwo from '../Assets/urban-bites-menu-2.jpg';
import menuThree from '../Assets/urban-bites-menu-3.jpg';
import TemplateHeroMotion from './TemplateHeroMotion';

const menu = [
  { name: 'Truffle Tagliatelle', detail: 'Wild mushrooms, parmesan, herbs', price: '$24', image: menuOne },
  { name: 'Saffron Catch', detail: 'Daily fish, citrus beurre blanc', price: '$29', image: menuTwo },
  { name: 'Garden Burrata', detail: 'Heirloom tomatoes, basil oil', price: '$18', image: menuThree },
];

export default function RestaurantDemo() {
  const [notice, setNotice] = useState('');
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal, .scroll-stagger');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const reserve = (event) => {
    event.preventDefault();
    setNotice('Demo only — no reservation was submitted.');
  };

  return (
    <main className="restaurant-demo">
      <header className="restaurant-nav">
        <Link to="/web-templates" className="demo-back">← Templates</Link>
        <a href="#menu">Menu</a><a href="#story">Our story</a>
        <a href="#reserve" className="demo-book">Book a table</a>
      </header>
      <section className="restaurant-hero"><TemplateHeroMotion variant="restaurant" />
        <div className="restaurant-hero-copy"><p>Modern Italian kitchen · Vancouver</p><h1>Made for the<br /><i>good moments.</i></h1><a href="#reserve">Reserve your table <span>→</span></a></div>
        <div className="restaurant-hero-image"><img src={heroDish} alt="A plated Urban Bites dish" fetchPriority="high" /><small>Est. 2011</small></div>
      </section>
      <section className="restaurant-intro scroll-reveal" id="story"><img src={aboutDish} alt="Fresh restaurant dish" loading="lazy" decoding="async" /><div><p className="demo-kicker">A table worth gathering around</p><h2>Seasonal ingredients, <i>simply prepared.</i></h2><p>Urban Bites is a neighbourhood restaurant built around bright flavours, shared plates, and the comfort of a long dinner with friends.</p><a href="#menu">Explore the menu →</a></div></section>
      <section className="restaurant-menu scroll-reveal" id="menu"><p className="demo-kicker">A taste of tonight</p><h2>From our kitchen</h2><div className="demo-menu-grid">{menu.map((item, index) => <article className="scroll-stagger" style={{ '--reveal-delay': `${index * 110}ms` }} key={item.name}><img src={item.image} alt={item.name} loading="lazy" decoding="async" /><div><h3>{item.name}</h3><p>{item.detail}</p><b>{item.price}</b></div></article>)}</div></section>
      <section className="restaurant-reserve scroll-reveal" id="reserve"><div><p className="demo-kicker">Reservations</p><h2>Dinner is<br /><i>waiting.</i></h2><p>This booking area is a visual demo only. It does not send or store any information.</p></div><form onSubmit={reserve}><label>Name<input type="text" placeholder="Your name" /></label><label>Guests<select defaultValue="2"><option>2 guests</option><option>3 guests</option><option>4 guests</option></select></label><label>Date<input type="date" /></label><button type="submit">Request a table</button>{notice && <p className="demo-notice" role="status">{notice}</p>}</form></section>
      <footer className="restaurant-footer"><span>URBAN BITES</span><p>1250 Main Street · Vancouver, BC · (604) 555-0182</p><small>© {new Date().getFullYear()} BuildWebCanada. All rights reserved.</small><Link to="/web-templates">Back to templates</Link></footer>
    </main>
  );
}
