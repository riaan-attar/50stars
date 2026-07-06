import React from 'react';
import './AboutSection.css';
import AnimatedNumber from './AnimatedNumber';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Top Part */}
        <div className="about-top">
          {/* Left Column */}
          <div className="about-top-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">Who we are</span>
            </div>
            
            <div className="team-avatars-group">
              <div className="avatar-stack">
                <div className="avatar-wrap"><img src="/assets/about-avatar-1.png" alt="Avatar 1" /></div>
                <div className="avatar-wrap"><img src="/assets/about-avatar-2.png" alt="Avatar 2" /></div>
                <div className="avatar-wrap"><img src="/assets/about-avatar-3.png" alt="Avatar 3" /></div>
                <div className="avatar-wrap"><img src="/assets/about-avatar-4.png" alt="Avatar 4" /></div>
                <div className="avatar-count">10+</div>
              </div>
              <p className="team-text">Team of passionate<br/>professionals</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="about-top-right">
            <h2 className="about-title">
              Driven by technology, backed<br/>by experience, focused on<br/><span className="text-orange">manufacturing</span> excellence
            </h2>
            <p className="about-description">
              Backed by advanced technology, skilled craftsmanship, and a commitment to quality, we help businesses bring their ideas to life with confidence and speed. Whether it's prototyping or full-scale production, we're your trusted partner every step of the way.
            </p>
            
            <div className="about-actions">
              <a href="#about" className="btn-learn-more">
                <span className="btn-lm-text">Learn more about us</span>
                <span className="btn-lm-icon">
                  <img src="/assets/icon-arrow.svg" alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
              </a>
              <a href="/assets/brochure.pdf" download className="btn-download">
                Download brochure
                <img src="/assets/about-download-icon.svg" alt="Download" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part - Grid Cards */}
        <div className="about-bottom">
          
          {/* Card 1 */}
          <div className="about-card card-light">
            <div className="card-logo-text">50stars</div>
            <h2 className="card-counter text-orange"><AnimatedNumber value={100} /><span className="text-dark">+</span></h2>
            <p className="card-text text-dark">Trusted by businesses across multiple<br/>manufacturing industries worldwide</p>
            <div className="card-review-info">
              <div className="rating">
                <h2><AnimatedNumber value={4.9} decimals={1} /></h2>
                <p>/5.0</p>
              </div>
              <img className="review-stars" src="/assets/rating-stars-orange.svg" alt="Review Stars" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="about-card card-image">
            <img src="/assets/about-machinery.webp" alt="Machinery" />
          </div>
          
          {/* Card 3 */}
          <div className="about-card card-orange">
            <div className="card-orange-content">
              <p className="card-pretitle">// 2005-2K26 //</p>
              <h2 className="card-counter text-dark"><AnimatedNumber value={20} />+</h2>
              <p className="card-text text-light">Delivering consistent manufacturing<br/>excellence since day one.</p>
            </div>
            <img className="card-badge" src="/assets/about-badge.png" alt="Badge" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
