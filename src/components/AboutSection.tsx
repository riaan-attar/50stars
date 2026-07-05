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
                <div className="avatar-wrap"><img src="https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png?width=120&height=121" alt="Avatar 1" /></div>
                <div className="avatar-wrap"><img src="https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png?width=120&height=121" alt="Avatar 2" /></div>
                <div className="avatar-wrap"><img src="https://framerusercontent.com/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png?width=120&height=121" alt="Avatar 3" /></div>
                <div className="avatar-wrap"><img src="https://framerusercontent.com/images/crOykN7l4AlMK9acNXCVRzJmcg.png?width=120&height=121" alt="Avatar 4" /></div>
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
                  <img src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg?width=16&height=12" alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
              </a>
              <a href="https://framerusercontent.com/assets/v9AJ9QDAVxlfeZvrmT5L6X1m3I.pdf" target="_blank" rel="noreferrer" className="btn-download">
                Download brochure
                <img src="https://framerusercontent.com/images/ss0bmyns6jeXRaMshGzNYH68.svg?width=40&height=40" alt="Download" />
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
              <img className="review-stars" src="https://framerusercontent.com/images/vLIB1zDP4bI0m0N2PXLiIxcw5Y.svg?width=95&height=14" alt="Review Stars" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="about-card card-image">
            <img src="https://framerusercontent.com/images/4hIoQd7fUjgL9EiEVuQro0eTrfc.webp?width=500&height=500" alt="Machinery" />
          </div>
          
          {/* Card 3 */}
          <div className="about-card card-orange">
            <div className="card-orange-content">
              <p className="card-pretitle">// 2005-2K26 //</p>
              <h2 className="card-counter text-dark"><AnimatedNumber value={20} />+</h2>
              <p className="card-text text-light">Delivering consistent manufacturing<br/>excellence since day one.</p>
            </div>
            <img className="card-badge" src="https://framerusercontent.com/images/7deJkILirgC0DVZq9WujKIpwKY.png?width=124&height=164" alt="Badge" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
