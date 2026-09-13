import React from 'react';
import { Link } from 'react-router-dom';
import './WebTemplates.css';
import restaurantHome from '../Assets/restaurant-template-home.jpg';
import cleaningHome from '../Assets/cleaning-template-home.png';
import italianHome from '../Assets/italian-banner.webp';
import constructionHome from '../Assets/construction-hero-original.png';
import renovationHome from '../Assets/renovation-hero-original.png';
import tattooHome from '../Assets/tattoo-hero-original.png';
import salonHome from '../Assets/salon-hero-original.png';

const templates = [
  { name: 'Restaurant', eyebrow: 'Dining & hospitality', accent: 'terracotta', icon: '✦', image: restaurantHome, description: 'A warm, conversion-focused menu and reservation experience for memorable local dining.' },
  { name: 'Italian Restaurant', eyebrow: 'Dining & hospitality', accent: 'italian', icon: '✦', image: italianHome, description: 'A refined Italian dining experience with seasonal recipes and classic hospitality.' },
  { name: 'Cleaning', eyebrow: 'Home services', accent: 'sky', icon: '✳', image: cleaningHome, description: 'A polished service site that makes it simple to request a quote and book a clean.' },
  { name: 'Construction', eyebrow: 'Trades & building', accent: 'gold', icon: '◫', image: constructionHome, description: 'Built to establish credibility, showcase projects, and turn visits into estimate requests.' },
  { name: 'Renovation', eyebrow: 'Trades & building', accent: 'renovation', icon: '◈', image: renovationHome, description: 'A considered renovation template for refined spaces and ambitious transformations.' },
  { name: 'Tattoo Artist', eyebrow: 'Creative studio', accent: 'rose', icon: '✺', image: tattooHome, description: 'An expressive portfolio that puts the artist’s work, style, and booking process first.' },
  { name: 'Salon', eyebrow: 'Beauty & wellness', accent: 'lilac', icon: '✦', image: salonHome, description: 'A refined appointment-ready site for services, stylists, and a beautiful client experience.' },
];

const WebTemplates = () => (
  <main className="templates-page">
    <section className="templates-hero">
      <p className="section-kicker">Starting points, made to feel original</p>
      <h1>Websites shaped for<br /><em>your kind of business.</em></h1>
      <p>Explore a selection of flexible website directions. We tailor every template to your brand, goals, and customers.</p>
    </section>

    <section className="template-grid" aria-label="Website template categories">
      {templates.map((template, index) => (
        <article className={`template-card ${template.accent}`} key={template.name}>
          <div className={`template-preview ${template.image ? 'has-image' : ''}`}>
            {template.image ? (
              <img src={template.image} alt={`${template.name} website home page preview`} loading="lazy" decoding="async" />
            ) : <>
              <div className="preview-bar"><i></i><i></i><i></i></div>
              <div className="preview-label">{template.name === 'Tattoo Artist' ? 'INK / STUDIO' : template.name.toUpperCase()}</div>
              <div className="preview-shape shape-one"></div>
              <div className="preview-shape shape-two"></div>
              <div className="preview-lines"><span></span><span></span><span></span></div>
              <b>{String(index + 1).padStart(2, '0')}</b>
            </>}
          </div>
          <div className="template-details">
            <p>{template.eyebrow}</p>
            <div className="template-heading"><span>{template.icon}</span><h2>{template.name}</h2></div>
            <p className="template-description">{template.description}</p>
            <Link to={template.name === 'Restaurant' ? '/web-templates/restaurant' : template.name === 'Italian Restaurant' ? '/web-templates/italian-restaurant' : template.name === 'Cleaning' ? '/web-templates/cleaning' : template.name === 'Construction' ? '/web-templates/construction' : template.name === 'Renovation' ? '/web-templates/renovation' : template.name === 'Tattoo Artist' ? '/web-templates/tattoo-artist' : template.name === 'Salon' ? '/web-templates/salon' : '/#contact'}>
              {['Restaurant', 'Italian Restaurant', 'Cleaning', 'Construction', 'Renovation', 'Tattoo Artist', 'Salon'].includes(template.name) ? 'View demo' : 'Customize this template'} <span>→</span>
            </Link>
          </div>
        </article>
      ))}
    </section>

    <section className="templates-cta">
      <p className="section-kicker">Need something different?</p>
      <h2>Let’s create a site that’s <em>unmistakably yours.</em></h2>
      <Link to="/#contact">Start a conversation <span>→</span></Link>
    </section>
  </main>
);

export default WebTemplates;
