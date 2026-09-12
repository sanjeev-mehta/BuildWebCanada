import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItalianRestaurantDemo.css';
import banner from '../Assets/italian-banner.webp';
import foodOne from '../Assets/italian-food-1.webp';
import foodTwo from '../Assets/italian-food-2.webp';
import foodThree from '../Assets/italian-food-3.webp';

const dishes = [
  ['Pappardelle al Ragù', 'Slow-braised beef, rosemary, pecorino', foodOne],
  ['Branzino alla Griglia', 'Charred lemon, capers, olive oil', foodTwo],
  ['Tiramisù della Casa', 'Espresso, mascarpone, cocoa', foodThree],
];

export default function ItalianRestaurantDemo() {
  const [notice, setNotice] = useState('');
  return <main className="italian-demo">
    <header className="italian-nav"><Link to="/web-templates">← Templates</Link><strong>VIA LUNA</strong><nav><a href="#story">About</a><a href="#menu">Menu</a><a href="#reserve">Reservations</a></nav><a className="italian-outline" href="#reserve">Book a table</a></header>
    <section className="italian-hero"><img src={banner} alt="Italian dining table" fetchPriority="high" /><div className="italian-hero-copy"><p>Italian cucina · Vancouver</p><h1>Gather around<br />the <i>table.</i></h1><a href="#menu">Discover our menu</a></div></section>
    <section className="italian-story" id="story"><p className="italian-kicker">La nostra storia</p><h2>Simple food,<br /><i>made beautifully.</i></h2><p>Via Luna is a fictional Italian restaurant created for this website template. Names, details, and locations are sample content only.</p></section>
    <section className="italian-menu" id="menu"><div><p className="italian-kicker">From the kitchen</p><h2>Seasonal<br /><i>favourites.</i></h2></div><div className="italian-dishes">{dishes.map(([name, copy, image], index) => <article key={name}><img src={image} alt={name} loading="lazy" decoding="async" /><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div></section>
    <section className="italian-reserve" id="reserve"><div><p className="italian-kicker">Reservations</p><h2>Buon appetito<br /><i>awaits.</i></h2></div><form onSubmit={(event) => { event.preventDefault(); setNotice('Demo only — no table was reserved.'); }}><input placeholder="Your name" /><input type="email" placeholder="Email address" /><select defaultValue=""><option value="" disabled>Number of guests</option><option>2 guests</option><option>4 guests</option><option>6 guests</option></select><button type="submit">Request a table</button>{notice && <p role="status">{notice}</p>}</form></section>
    <footer className="italian-footer"><strong>VIA LUNA</strong><span>Sample restaurant · 47 Moonlight Avenue · Vancouver</span><Link to="/web-templates">Back to templates</Link></footer>
  </main>;
}
