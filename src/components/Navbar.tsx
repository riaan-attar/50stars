import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          MANUFACT<sup>®</sup>
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
