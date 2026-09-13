import React from 'react';
import './TemplateHeroMotion.css';

export default function TemplateHeroMotion({ variant }) {
  return <div className={`template-hero-motion motion-${variant}`} aria-hidden="true"><span className="motion-glow" /><span className="motion-line" /><span className="motion-grain" /></div>;
}
