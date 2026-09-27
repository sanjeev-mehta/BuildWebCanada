import React, { useState } from 'react';
import './ItalianRestaurantDemo.css';
import exterior from '../Assets/piccolo-exterior.jpeg';
import interior from '../Assets/piccolo-interior.jpeg';
import stew from '../Assets/piccolo-stew.jpeg';
import kebab from '../Assets/piccolo-kebab.jpeg';

const menuSections = {
  Pasta: [
    ['Spaghetti Carbonara', 'Creamy sauce with bacon and cracked black pepper.', '$19.99'],
    ['Fettuccine Alfredo', 'Tender grilled chicken tossed in a rich and creamy Alfredo sauce.', '$19.99'],
    ['Ravioli', 'Cheese ravioli served in a creamy pesto sauce.', '$19.99'],
    ['Spaghetti Pomodoro', 'Classic spaghetti with fresh tomato sauce, basil, and homemade meatballs.', '$19.99'],
    ['Gnocchi', 'Hand-rolled potato dumplings served in a savory tomato sauce.', '$19.99'],
    ['Penne Alla Vodka', 'Penne pasta in a creamy rosé vodka sauce, topped with baked cheese.', '$19.99'],
    ['Veal Tortellini', 'Veal-filled tortellini in rosé sauce with baked cheese.', '$19.99'],
    ['Piccolo Penne', 'Penne with chicken and mushrooms in a creamy rosé sauce.', '$19.99'],
    ['Spaghetti Frutti di Mare', 'Shrimp, mussels, clams, and calamari sautéed in a rich tomato sauce.', '$22.99'],
  ],
  'Entrées': [
    ['Lamb Shank', 'Slow-braised lamb shank cooked in red wine, served with rice.', '$22.99'],
    ['Chicken Parmigiana', 'Breaded chicken breast topped with Piccolo’s house Italian flavours.', '$22.99'],
  ],
  'Pasta add-ons': [
    ['Add meat', 'Make any pasta dish heartier.', '+$2.99'],
    ['Add vegetables', 'Add a seasonal vegetable finish.', '+$1.50'],
  ],
};

const menuVisuals = {
  Pasta: ['La pasta', 'Italian comfort, made for the table.'],
  'Entrées': ['Secondi', 'Rich, generous plates for a memorable meal.'],
  'Pasta add-ons': ['Make it yours', 'A few thoughtful additions, exactly how you like it.'],
};

export default function ItalianRestaurantDemo() {
  const [activeMenu, setActiveMenu] = useState('Pasta');
  const activeItems = menuSections[activeMenu];
  const [menuTitle, menuCopy] = menuVisuals[activeMenu];
  return <main className="piccolo-demo">
    <header className="piccolo-nav">
      <span className="piccolo-nav-spacer" aria-hidden="true" />
      <a className="piccolo-wordmark" href="#top"><b>PICCOLO</b><small>Italian & Eritrean</small></a>
      <nav><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#visit">Visit us</a></nav>
      <a className="piccolo-book" href="tel:+14036061031"><span className="piccolo-book-label">Call to order</span><span className="piccolo-book-arrow">↗</span></a>
    </header>
    <section className="piccolo-hero" id="top">
      <img src={exterior} alt="The Piccolo Italian and Eritrean Restaurant storefront in Calgary" fetchPriority="high" />
      <div className="piccolo-hero-shade" />
      <div className="piccolo-hero-copy"><p className="piccolo-eyebrow">Calgary's table for two traditions</p><h1>Two cultures.<br /><em>One beautiful table.</em></h1><p className="piccolo-lede">Italian classics and Eritrean favourites, made to gather over.</p><div className="piccolo-hero-actions"><a href="#menu">Explore the menu <span>↓</span></a><a href="tel:+14036061031" className="piccolo-text-link">+1 403-606-1031</a></div></div>
      <div className="piccolo-hero-hours"><span>Open daily</span><b>11 AM - 10 PM</b></div>
    </section>
    <section className="piccolo-intro" id="story"><p className="piccolo-eyebrow">A little about Piccolo</p><div className="piccolo-intro-grid"><h2>Comfort food,<br /><em>without borders.</em></h2><div><p>Piccolo Italian and Eritrean Restaurant brings together the rich flavours of Italian and Eritrean cuisine in Calgary - a table with something memorable for everyone.</p><a href="#visit">Find us in Calgary <span>→</span></a></div></div></section>
    <section className="piccolo-feature"><div className="piccolo-feature-image"><img src={stew} alt="A richly spiced Piccolo dish served with flatbread" loading="lazy" /></div><div className="piccolo-feature-copy"><p className="piccolo-eyebrow">Italian & Eritrean</p><h2>A menu made for<br /><em>curiosity.</em></h2><p>From creamy pastas and Italian comfort classics to deeply flavoured Eritrean dishes, every visit is an invitation to discover a new favourite.</p><a href="#menu">Explore our menu <span>↓</span></a></div></section>
    <section className="piccolo-menu" id="menu"><div className="piccolo-menu-heading"><p className="piccolo-eyebrow">From the kitchen</p><h2>Made with<br /><em>heart.</em></h2><p>Comforting flavours, generous plates, and classics worth coming back for.</p><div className="piccolo-menu-tabs" role="tablist" aria-label="Piccolo menu categories">{Object.keys(menuSections).map((section) => <button type="button" role="tab" aria-selected={activeMenu === section} className={activeMenu === section ? 'active' : ''} onClick={() => setActiveMenu(section)} key={section}>{section}</button>)}</div></div><div className="piccolo-menu-list"><div className="piccolo-menu-intro"><p>{menuTitle}</p><span>{menuCopy}</span></div>{activeItems.map(([name, description, price], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{name}</h3><p>{description}</p></div><b>{price}</b></article>)}</div></section>
    <section className="piccolo-gallery"><div className="piccolo-gallery-copy"><p className="piccolo-eyebrow">Come as you are</p><h2>Your neighbourhood<br /><em>table is ready.</em></h2><p>Settle into a booth, bring the whole family, and make an evening of it.</p></div><img src={interior} alt="Warm booth seating inside Piccolo Restaurant" loading="lazy" /><img src={kebab} alt="Grilled skewers with fragrant rice and fresh salad" loading="lazy" /></section>
    <section className="piccolo-visit" id="visit"><div><p className="piccolo-eyebrow">Visit Piccolo</p><h2>We'll save<br /><em>you a seat.</em></h2></div><div className="piccolo-contact-grid"><a href="https://maps.google.com/?q=255+28+St+SE+302+Calgary+AB+T2A+5K4" target="_blank" rel="noreferrer"><span>Location</span><strong>255 28 St SE #302<br />Calgary, AB T2A 5K4</strong><i>Get directions ↗</i></a><a href="tel:+14036061031"><span>Call us</span><strong>+1 403-606-1031</strong><i>Call Piccolo ↗</i></a><div><span>Hours</span><strong>Open daily<br />11:00 AM - 10:00 PM</strong><i>Walk-ins welcome</i></div></div></section>
    <section className="piccolo-cta"><p className="piccolo-eyebrow">Hungry yet?</p><h2>Good food is<br /><em>better together.</em></h2><a href="tel:+14036061031">Call +1 403-606-1031 <span>↗</span></a></section>
    <footer className="piccolo-footer"><div className="piccolo-wordmark"><b>PICCOLO</b><small>Italian & Eritrean</small></div><p>255 28 St SE #302, Calgary, AB T2A 5K4</p><p>© {new Date().getFullYear()} Piccolo Italian & Eritrean Restaurant</p></footer>
  </main>;
}
