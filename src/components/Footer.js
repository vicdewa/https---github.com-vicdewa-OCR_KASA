import React from 'react';
import './Footer.css';
import logo from '../assets/LOGO_header.png';

const Footer = () => {
  return (
    <footer className='content_footer'>
      <div>
        <img src={logo} alt="Logo" className="footer__logo"/>
        <p className="footer_right">&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;