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
              <h2 className="wc-title" style={{ fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '-1.5px', marginBottom: '1.5rem' }}>
                Sourced anywhere. Certified everywhere.<br/>Delivered on your schedule.
              </h2>
              
              <ul className="wc-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
                  <div><strong>Mill Partnerships</strong> — direct relationships across major steel-producing regions</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
                  <div><strong>Fabrication Partners</strong> — pre-qualified shops for cut, drilled, and pre-assembled packages</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
                  <div><strong>Port & Freight</strong> — flat rack, breakbulk, container, and OOG logistics coordination</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
                  <div><strong>Regional Compliance</strong> — sourcing matched to ASTM, EN, AS/NZS, depending on destination</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
                  <div><strong>Warehousing Partners</strong> — staging and inventory support near major project corridors</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-white)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  <img src="/assets/icon-check.svg" alt="check" style={{ marginTop: '3px' }} />
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
