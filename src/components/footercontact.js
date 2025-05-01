import React from 'react';
import '../stylesheet/footercontact.css';
import footerData from '../data/footerdata.js';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <img src={footerData.logo} alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href={footerData.socialLinks.instagram} target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
          {/* <a href={footerData.socialLinks.twitter} target="_blank" rel="noreferrer noopener"><FaTwitter /></a> */}
          <a href={footerData.socialLinks.linkedin} target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
          <a href={footerData.socialLinks.github} target="_blank" rel="noreferrer noopener"><FaGithub /></a>
          <a href={footerData.socialLinks.gmail} target="_blank" rel="noreferrer noopener" ><FaEnvelope /></a>
        </div>
        <nav className="footer-nav">
          {footerData.navLinks.map((link, index) => (
            <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p><FaEnvelope className="icon" /> {footerData.contact.email}</p>
        <p><FaWhatsapp className="icon" /> {footerData.contact.whatsapp}</p>
      </div>
      <div className="footer-note">
        © {new Date().getFullYear()} Kiran Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
