import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import logo from './LOGO_header.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;