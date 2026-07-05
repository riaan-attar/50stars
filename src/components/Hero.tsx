import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <div className="hero-left">
            <div className="tag-pill">
              <span className="tag-dot"></span>
              Trusted manufacturing partner
            </div>
            
            <h1 className="hero-title">
              <span className="nobr">From raw <span className="text-orange">materials</span></span><br />
              <span className="nobr">to finished products</span>
            </h1>
          </div>
          
          <div className="hero-right">
            <div className="since-text">
              // SINCE - 2005 //
            </div>
            
            <p className="hero-description">
              We deliver end-to-end manufacturing solutions from machining and fabrication to molding and assembly engineered for quality, efficiency, and on-time delivery.
            </p>
            
            <button className="btn-explore">
              <span className="btn-explore-text">Explore our capabilities</span>
              <span className="btn-explore-icon">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>

        <div className="hero-footer">
          <div className="footer-location">
            Based in: Los Angeles, USA
          </div>
          <div className="footer-scroll">
            SCROLL DOWN
          </div>
          <div className="footer-coords">
            21.0278° N, 105.8342° E
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
