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
            <img src="/assets/why-bg.webp" alt="Machinery" />
          </div>

          <div className="wc-banner-content">
            <div className="wc-content-inner">
              <h2 className="wc-title">Manufacturing solutions<br/>you can count on</h2>
              
              <ul className="wc-features">
                <li><img src="/assets/icon-check.svg" alt="check" /> Manual & automated assembly</li>
                <li><img src="/assets/icon-check.svg" alt="check" /> Certified quality assurance</li>
                <li><img src="/assets/icon-check.svg" alt="check" /> On-time delivery</li>
                <li><img src="/assets/icon-check.svg" alt="check" /> End-to-end solutions</li>
                <li><img src="/assets/icon-check.svg" alt="check" /> Advanced technology</li>
                <li><img src="/assets/icon-check.svg" alt="check" /> Customer-centric approach</li>
              </ul>

              <a href="#capabilities" className="btn-orange-solid wc-btn">
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
