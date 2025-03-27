import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>AI投資大會</h1>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#overview">活動概覽</a></li>
            <li><a href="#keynotes">主題演講</a></li>
            <li><a href="#forums">論壇討論</a></li>
            <li><a href="#speakers">講者陣容</a></li>
            <li><a href="#schedule">活動日程</a></li>
            <li><a href="#registration" className="register-btn">立即報名</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 