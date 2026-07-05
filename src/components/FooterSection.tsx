import React from 'react';
import './FooterSection.css';

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      
      {/* Background Glow */}
      <div className="ft-shadow ft-shadow-left">
        <img src="/assets/footer-shadow.svg" alt="Shadow" />
      </div>
      <div className="ft-shadow ft-shadow-right">
        <img src="/assets/footer-shadow.svg" alt="Shadow" />
      </div>

      <div className="ft-container">
        
        <div className="ft-top">
          
          {/* Col 1: Stay Connected */}
          <div className="ft-col ft-col-1">
            <h3 className="ft-col-title">Stay connected</h3>
            <p className="ft-col-desc">
              Join our newsletter for tips, updates, and project highlights—only the good stuff.
            </p>
            <form className="ft-form">
              <input type="email" placeholder="Enter your email" required className="ft-input" />
              <button type="submit" className="ft-submit">
                <img src="/assets/icon-arrow-dark.svg" alt="Submit" />
              </button>
            </form>
          </div>

          {/* Col 2: Links */}
          <div className="ft-col ft-col-2">
            <h3 className="ft-col-title">Links</h3>
            <div className="ft-links-wrap">
              <ul className="ft-link-list">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
              <ul className="ft-link-list">
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#404">Error 404</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact info */}
          <div className="ft-col ft-col-3">
            <h3 className="ft-col-title">Contact info</h3>
            <ul className="ft-link-list">
              <li><a href="#" target="_blank" rel="noopener noreferrer">1238 echo ridge blvd, suite 400, san francisco, CA 94103</a></li>
              <li><a href="tel:+14155550167">+1 (415) 555-0167</a></li>
              <li><a href="mailto:support@example.com">support@example.com</a></li>
            </ul>
          </div>

          {/* Col 4: Working hours */}
          <div className="ft-col ft-col-4">
            <h3 className="ft-col-title">Working hours</h3>
            <ul className="ft-text-list">
              <li>Mon to Fri: 8:00am - 4:00pm</li>
              <li>Saturday: 8:00am - 1:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>

        <div className="ft-divider"></div>

        <div className="ft-bottom">
          <div className="ft-copyright">
            <p>Designed by <a href="https://webestica.com" target="_blank" rel="noreferrer">Webestica</a>, Powered by <a href="https://framer.com" target="_blank" rel="noreferrer">Framer</a></p>
          </div>
          
          <div className="ft-socials">
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-facebook.svg" alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-instagram.svg" alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-twitter.svg" alt="Twitter" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Big Logo */}
        <div className="ft-big-logo">
          <img src="/assets/footer-logo.svg" alt="MANUFACT" />
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
