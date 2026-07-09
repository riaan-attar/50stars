import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-left">
            <div className="tag-pill">
              <span className="tag-dot"></span>
              Trusted global procurement partner
            </div>

            <h1 className="hero-title">
              From mill <span className="text-orange">to job site,</span><br />
              every material your project needs, sourced and delivered.
            </h1>
          </div>

          <div className="hero-right">
            <div className="since-text">
              // SINCE — 2005 //
            </div>

            <p className="hero-description">
              We source and deliver certified structural steel and construction materials — every beam, joist, hollow section, and site-critical component your project calls for — through a global partner network of mills, fabricators, ports, and freight carriers, engineered for certified quality and on-time delivery.
            </p>

            <button className="btn-explore" onClick={(e) => navigateTo(e, '/services')}>
              <span className="btn-explore-text">Explore Our Capabilities</span>
              <span className="btn-explore-icon">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>

        <div className="hero-footer">
          <div className="footer-location">
            Based in: San Francisco, USA
          </div>
          <div className="footer-scroll">
            SCROLL DOWN &darr;
          </div>
          <div className="footer-coords">
            37.7749° N, 122.4194° W
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
