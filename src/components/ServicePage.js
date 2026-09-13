import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import './ServicePage.css';

const services = {
  'web-design-vancouver': {
    eyebrow: 'Web design in Vancouver',
    title: <>Websites that make<br /><i>the next step clear.</i></>,
    intro: 'BuildWebCanada creates strategic, high-performing websites for Vancouver businesses that need a sharper digital presence and a clearer path to growth.',
    label: 'Web design services',
    items: ['Website strategy and positioning', 'UX/UI design for desktop and mobile', 'Responsive marketing websites', 'Conversion-focused content structure'],
    outcome: 'A website designed to communicate value quickly, build trust, and turn more of the right visitors into conversations.',
  },
  'web-development-calgary': {
    eyebrow: 'Web development in Calgary',
    title: <>Built to perform.<br /><i>Made to grow.</i></>,
    intro: 'BuildWebCanada develops fast, reliable, scalable websites for Calgary businesses ready to improve their digital foundation.',
    label: 'Web development services',
    items: ['Modern responsive website development', 'Custom interactions and integrations', 'Performance and technical SEO foundations', 'Ongoing support and iteration'],
    outcome: 'A robust website that feels effortless for your customers and gives your team a platform that can evolve with the business.',
  },
  'mobile-app-development-canada': {
    eyebrow: 'Mobile app development in Canada',
    title: <>Useful products for<br /><i>real people.</i></>,
    intro: 'BuildWebCanada designs and develops thoughtful mobile app experiences for Canadian businesses turning ambitious ideas into useful digital products.',
    label: 'Mobile app services',
    items: ['Product discovery and feature planning', 'iOS and Android app design', 'User flows, prototyping, and UI systems', 'MVP development and launch support'],
    outcome: 'A focused product experience that solves a real problem, makes adoption easier, and creates room for long-term growth.',
  },
};

export default function ServicePage({ service }) {
  const content = services[service];
  return <main className="service-page"><section className="service-hero"><span className="service-orb orb-one" /><span className="service-orb orb-two" /><div><p>{content.eyebrow}</p><h1>{content.title}</h1><p className="service-intro">{content.intro}</p><a href="mailto:buildwebcanada@gmail.com">Start a conversation <FiArrowUpRight /></a></div><aside><span>BuildWebCanada</span><b>01</b><small>Strategy · Design · Development</small></aside></section><section className="service-details"><div><p className="service-kicker">What we bring</p><h2>{content.label}<br /><i>with purpose.</i></h2></div><div className="service-list">{content.items.map((item) => <p key={item}><FiCheck /> {item}</p>)}</div></section><section className="service-outcome"><p className="service-kicker">The outcome</p><blockquote>{content.outcome}</blockquote><Link to="/projects">See selected projects <FiArrowUpRight /></Link></section><section className="service-cta"><p className="service-kicker">Your next move</p><h2>Ready to make it<br /><i>matter?</i></h2><a href="mailto:buildwebcanada@gmail.com">Tell us about your project <FiArrowUpRight /></a></section></main>;
}
