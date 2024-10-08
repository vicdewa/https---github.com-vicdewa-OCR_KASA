import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/LOGO_header.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image"/>
      </div>
      <nav className="header__nav">
      <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;