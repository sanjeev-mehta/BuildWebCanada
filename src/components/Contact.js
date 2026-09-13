import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import './ContactMap.css';
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: .14 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <section className={`contact-section ${visible ? 'is-visible' : ''}`} id="contact" ref={ref}>
    <div className="contact-shell"><div className="contact-copy"><p className="section-kicker">Start a conversation</p><h2>Let’s make your<br /><span>next move matter.</span></h2><p className="contact-intro">Have an idea, a product challenge, or a project in motion? Tell us where you’re headed and we’ll help find the right way forward.</p><a className="contact-cta" href="mailto:buildwebcanada@gmail.com">Tell us about your project <FiArrowUpRight /></a><div className="contact-details"><a href="mailto:buildwebcanada@gmail.com"><FiMail /> buildwebcanada@gmail.com</a><a href="tel:+17789969060"><FiPhone /> +1 (778) 996 9060</a><a href="tel:+17789303838"><FiPhone /> +1 (778) 930 3838</a><span><FiMapPin /> Vancouver & Calgary · Working worldwide</span></div></div><div className="contact-map-panel" aria-label="Calgary location"><div className="contact-map-label"><p>Calgary location</p><span>3800 Fonda Way, Calgary, AB T2A 6G8</span><a href="https://maps.app.goo.gl/us9N6zcBUaALLc5S6?g_st=ic" target="_blank" rel="noreferrer">Directions <FiArrowUpRight /></a></div><iframe title="BuildWebCanada Calgary location" src="https://www.google.com/maps?q=3800+Fonda+Wy.,+Calgary,+AB+T2A+6G8&output=embed" loading="lazy" /></div></div>
  </section>;
};

export default Contact;
