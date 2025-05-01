import React, { useState } from 'react';
import Logo from '../assets/sl.jpg'
import '../stylesheet/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="pl-logo" />
      {/* <div className="logo">Spotlight</div> */}

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button onClick={() => handleScroll('about')}>About</button>
        <button onClick={() => handleScroll('skills')}>Skills</button>
        <button onClick={() => handleScroll('projects')}>Projects</button>
        <button onClick={() => handleScroll('contact')}>Contact</button>
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
