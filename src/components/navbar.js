import React, { useState, useEffect } from 'react';
import Logo from '../assets/sl.jpg'; // Path to your logo
import '../stylesheet/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu and set scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setIsOpen(false); // Close menu on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <img src={Logo} alt="Logo" className="pl-logo" />

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button onClick={() => handleClick('about')}>About</button>
        <button onClick={() => handleClick('projects')}>Projects</button>
        <button onClick={() => handleClick('skills')}>Skills</button>
        <button onClick={() => handleClick('courses')}>Courses</button>
        <button onClick={() => handleClick('contact')}>Contact</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
