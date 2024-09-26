import React from 'react';
import './Footer.css';
import logo from './LOGO_header.png';


const Footer = () => {
  return (
    <footer className='content_footer'>
      <div>
        <img src={logo} alt="Logo" className="footer__logo"/>
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;