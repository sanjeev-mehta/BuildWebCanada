import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Faq.css';

const questions = [
  ['What does a website project with BuildWebCanada include?', 'Each project is scoped around your business goals. Typical work can include strategy, UX/UI design, responsive development, content structure, search-ready foundations, and launch support.'],
  ['How long does it take to build a website?', 'The timeline depends on the project scope, content readiness, and feedback cycle. A focused marketing website can move quickly, while larger sites and custom features need more planning and production time.'],
  ['Do you build mobile apps as well as websites?', 'Yes. BuildWebCanada works on websites, digital products, and mobile app experiences for iOS and Android.'],
  ['Can you redesign an existing website?', 'Yes. We can review your current site, identify what is holding it back, and redesign the experience around clearer positioning, stronger performance, and better conversion paths.'],
  ['Do you work with businesses outside Vancouver and Calgary?', 'Yes. We work remotely with businesses across Canada and beyond, with a process designed to keep communication and approvals straightforward.'],
  ['Will you support the website after launch?', 'Yes. Ongoing support can be planned around updates, optimisation, new features, and future growth after the initial launch.'],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section" id="faq"><div className="faq-shell"><div className="faq-intro"><p className="section-kicker">Helpful answers</p><h2>Questions, <span>answered.</span></h2><p>Clearer decisions start with the right information. Here are the questions we hear most often.</p></div><div className="faq-list">{questions.map(([question, answer], index) => <article className={open === index ? 'is-open' : ''} key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span>{open === index ? <FiMinus /> : <FiPlus />}</button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>;
}
