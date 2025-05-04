import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-text">SkillWave</span>
        </Link>
        
        <button 
          className="header__menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="header__menu-icon"></span>
        </button>
        
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/courses" className="header__nav-link">Courses</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about" className="header__nav-link">About</Link>
            </li>
            {isAuth ? (
              <li className="header__nav-item">
                <Link to="/account" className="header__nav-link header__nav-link--highlight">Account</Link>
              </li>
            ) : (
              <li className="header__nav-item">
                <Link to="/login" className="header__nav-link header__nav-link--highlight">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;