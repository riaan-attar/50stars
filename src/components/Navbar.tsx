import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          50stars
        </div>
        
        <nav className="navbar-links">
          <a href="#home" className="nav-link active">
            <span className="dot"></span>Home
          </a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="navbar-action">
          <button className="btn-quote">
            <span className="btn-text">Get a quote</span>
            <span className="btn-icon">
              <ArrowRight size={18} />
            </span>
          </button>

          <button className="btn-menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar & Backdrop */}
      <div className={`navbar-backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`navbar-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="navbar-logo" style={{ color: 'var(--color-white)' }}>
            50stars
          </div>
          <button className="btn-sidebar-close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-links">
          <a href="#home" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#blog" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
            Blog
          </a>
          <a href="#contact" className="sidebar-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-quote" style={{ width: '100%' }}>
            <span className="btn-text" style={{ flex: 1, textAlign: 'center' }}>Get a quote</span>
            <span className="btn-icon">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
