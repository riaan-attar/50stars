import React from 'react';
import './WhyChooseSection.css';

const clients = [
  '/assets/client-1.svg',
  '/assets/client-2.svg',
  '/assets/client-3.svg',
  '/assets/client-4.svg',
  '/assets/client-5.svg',
  '/assets/client-6.svg',
  '/assets/client-7.svg',
  '/assets/client-8.svg',
  '/assets/client-9.svg',
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="why-choose-section" id="why-choose">
      
      {/* Top Ticker */}
      <div className="wc-ticker-wrap">
        <div className="wc-ticker">
          {/* Double the list for seamless infinite scroll */}
          {[...clients, ...clients].map((client, idx) => (
            <div className="wc-client-logo" key={idx}>
              <img src={client} alt={`Client ${idx}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="wc-container">
        
        {/* Main Banner */}
        <div className="wc-banner">
          
          <div className="wc-banner-bg">
            <img src="/assets/why-bg.webp" alt="Global Steel Sourcing" />
          </div>

          <div className="wc-banner-content">
            <div className="wc-content-inner">
              <div className="pill-who-we-are" style={{ marginBottom: '1.25rem' }}>
                <div className="pill-gradient-square"></div>
                <span className="pill-text">Why choose us</span>
              </div>
              <h2 className="wc-title">
                Sourced anywhere. Certified everywhere.<br/>Delivered on your schedule.
              </h2>
              
              <ul className="wc-features">
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Mill Partnerships</strong> — direct relationships across multiple steel-producing regions</div>
                </li>
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Fabrication Partners</strong> — pre-qualified shops for cut, drilled, and pre-assembled packages</div>
                </li>
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Port & Freight Partnerships</strong> — flat rack, breakbulk, container, and OOG logistics</div>
                </li>
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Regional Compliance Coverage</strong> — sourcing matched to ASTM, EN, AS/NZS, and other certification regimes depending on destination</div>
                </li>
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Warehousing Partners</strong> — staging and inventory support near major project corridors</div>
                </li>
                <li>
                  <img src="/assets/icon-check.svg" alt="check" />
                  <div><strong>Fair Trade Pricing</strong> — flat $10-per-metric-ton procurement fee, no hidden markups</div>
                </li>
              </ul>

              <a 
                href="/services" 
                className="btn-orange-solid wc-btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/services');
                  window.dispatchEvent(new Event('popstate'));
                }}
              >
                <span className="btn-os-text">Our Capabilities</span>
                <span className="btn-os-icon">
                  <img src="/assets/icon-arrow.svg" alt="Arrow" />
                </span>
              </a>

              <div className="wc-rating-block">
                <div className="wc-avatars">
                  <img src="/assets/avatar-1.png" alt="Client 1" />
                  <img src="/assets/avatar-2.png" alt="Client 2" />
                  <img src="/assets/avatar-3.png" alt="Client 3" />
                  <img src="/assets/avatar-4.png" alt="Client 4" />
                </div>
                <div className="wc-rating-text">
                  <img src="/assets/rating-stars.svg" alt="5 Stars" className="wc-stars" />
                  <p>Happy clients worldwide</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
