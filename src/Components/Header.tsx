"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo">Qurat Portfolio</a>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Services">Services</a>
        <a href="/Contact">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
