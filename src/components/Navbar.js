import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiBriefcase, FiCode, FiGrid, FiHome, FiMail, FiUsers } from 'react-icons/fi';

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const links = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'services', label: 'Services', icon: FiCode },
    { id: 'projects', label: 'Projects', icon: FiBriefcase },
    { id: 'web-templates', label: 'Web Templates', icon: FiGrid },
    { id: 'about', label: 'About', icon: FiUsers },
    { id: 'contact', label: 'Contact', icon: FiMail },
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
              {id === 'projects' || id === 'web-templates' ? (
                <RouterLink
                  to={id === 'projects' ? '/projects' : '/web-templates'}
                  className={location.pathname === `/${id}` ? 'active' : ''}
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
                  duration={280}
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
          {links.map(({ id, label, icon: Icon }) => (
            <li key={id} onClick={closeMenu}>
              {id === 'projects' || id === 'web-templates' ? (
                <RouterLink onClick={closeMenu} to={id === 'projects' ? '/projects' : '/web-templates'}><span className="mobile-link-icon"><Icon /></span><span className="mobile-link-label">{label}</span><FiArrowUpRight className="mobile-link-arrow" /></RouterLink>
              ) : location.pathname === '/' ? (
                <ScrollLink onClick={closeMenu} to={id} spy smooth offset={-70} duration={280}><span className="mobile-link-icon"><Icon /></span><span className="mobile-link-label">{label}</span><FiArrowUpRight className="mobile-link-arrow" />
                </ScrollLink>
              ) : (
                <RouterLink onClick={closeMenu} to={`/#${id}`}><span className="mobile-link-icon"><Icon /></span><span className="mobile-link-label">{label}</span><FiArrowUpRight className="mobile-link-arrow" /></RouterLink>
              )}
            </li>
          ))}
          <li className="mobile-menu-footer"><span>Build something<br />worth remembering.</span><RouterLink to="/#contact" onClick={closeMenu}>Let’s talk <FiArrowUpRight /></RouterLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
