import React from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import heroIllustration from '../Assets/hero-team-illustration.png';
import './Hero.css';
const Hero = () => (<div className="hero-container" id="home"><div className="hero-copy"><p className="hero-eyebrow">BuildWebCanada <span>®</span> / Digital product partner</p><h1>Great ideas<br/>need a <i>great</i><br/><span>digital home.</span></h1><p className="hero-description">We design and build high-performing web and mobile products that bring ambitious ideas to life.</p><a href="#contact" className="hero-btn">Let’s get started <FiArrowUpRight /></a></div><div className="hero-feature"><img src={heroIllustration} alt="People collaborating on a digital product"/><p className="hero-note">From first idea to final release, our team is built around your next big move.</p></div><a className="hero-scroll" href="#services"><FiArrowDown/> Scroll to discover</a></div>);
export default Hero;
