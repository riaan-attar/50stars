import React from 'react';
import './TestimonialSection.css';
import AnimatedNumber from './AnimatedNumber';

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section" id="testimonial">
      <div className="tm-container">
        
        {/* Header */}
        <div className="tm-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text">Build on trust</span>
          </div>
          <h2 className="tm-title">
            Trusted by <span className="text-orange">clients</span>, proven by results
          </h2>
        </div>

        {/* Content Layout */}
        <div className="tm-grid">
          
          {/* Column 1: Testimonial Card */}
          <div className="tm-card tm-col-1">
            <div className="tm-avatars-sidebar">
              <div className="tm-avatar-btn active">
                <img src="/assets/testi-avatar-1.png" alt="Emily Carter" />
              </div>
              <div className="tm-avatar-btn">
                <img src="/assets/avatar-4.png" alt="Client 2" />
              </div>
              <div className="tm-avatar-btn">
                <img src="/assets/testi-avatar-3.png" alt="Client 3" />
              </div>
              <div className="tm-avatar-btn">
                <img src="/assets/testi-avatar-4.png" alt="Client 4" />
              </div>
              <div className="tm-avatar-btn">
                <img src="/assets/testi-avatar-5.png" alt="Client 5" />
              </div>
            </div>
            
            <div className="tm-quote-box">
              <div className="tm-stars">
                <img src="/assets/rating-stars-orange.svg" alt="5 Stars" />
              </div>
              <p className="tm-quote-text">
                The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.
              </p>
              <div className="tm-quote-author">
                <h4>Emily Carter</h4>
                <p>Product Designer</p>
              </div>
            </div>
          </div>

          {/* Column 2: Image and Stats */}
          <div className="tm-col-2">
            <div className="tm-image-card">
              <img src="/assets/testi-img.webp" alt="Factory" className="tm-img-bg" />
              <div className="tm-img-overlay">
                <p className="tm-img-year">// 2005-2K26 //</p>
                <div className="tm-logo-text">50stars</div>
              </div>
            </div>
            
            <div className="tm-stats-card">
              <div className="tm-stat-item">
                <h3><AnimatedNumber value={98} />%</h3>
                <p>On-Time delivery rate</p>
              </div>
              <div className="tm-stat-item">
                <h3><AnimatedNumber value={50} />+</h3>
                <p>Skilled professionals</p>
              </div>
            </div>
          </div>

          {/* Column 3: Support Card */}
          <div className="tm-card tm-col-3 tm-support-card">
            <div className="tm-support-shadow">
              <img src="/assets/support-shadow.svg" alt="Shadow" />
            </div>
            <div className="tm-support-content">
              <img src="/assets/support-icon.svg" alt="Support" className="tm-support-icon" />
              <h4 className="tm-support-title">Need help choosing the right product?</h4>
              <p className="tm-support-desc">Always ready with guidance, product details, and after-sales support.</p>
              
              <a href="#contact" className="btn-white-solid tm-support-btn">
                <span className="btn-ws-text">Contact Support</span>
                <span className="btn-ws-icon">
                  <img src="/assets/icon-arrow.svg" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
