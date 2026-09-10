import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import './Navbar.css';
import logo from '../Assets/buildwebcanada-logo.png';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={active ? 'navbar navbar-active' : 'navbar'}>
      <div className="navbar-container">
        <RouterLink to="/" className="logo-link">
          <img src={logo} alt="BuildWebCanada" className="logo-img" />
        </RouterLink>

        <div
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className="menu"></span>
          <span className="menu"></span>
          <span className="menu"></span>
        </div>

        <ul className="nav-links">
          {links.map(({ id, label }) => (
            <li key={id}>
              {id === 'projects' ? (
                <RouterLink
                  to="/projects"
                  className={location.pathname === '/projects' ? 'active' : ''}
                >
                  {label}
                  <span className="underline"></span>
                </RouterLink>
              ) : location.pathname === '/' ? (
                <ScrollLink
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                >
                  {label}
                  <span className="underline"></span>
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${id}`}>
                  {label}
                  <span className="underline"></span>
                </RouterLink>
              )}
            </li>
          ))}
        </ul>

        <ul className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id} onClick={closeMenu}>
              {id === 'projects' ? (
                <RouterLink to="/projects">{label}</RouterLink>
              ) : location.pathname === '/' ? (
                <ScrollLink to={id} spy smooth offset={-70} duration={500}>
                  {label}
                </ScrollLink>
              ) : (
                <RouterLink to={`/#${id}`}>{label}</RouterLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
