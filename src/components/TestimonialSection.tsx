import React, { useState } from 'react';
import './TestimonialSection.css';
import AnimatedNumber from './AnimatedNumber';

const testimonialsData = [
  {
    id: 1,
    name: 'James Mitchell',
    role: 'Senior Sourcing Director, Infrastructure Build Group',
    avatar: '/assets/testi-avatar-1.png',
    quote: '50 Stars turned a three-country sourcing headache into a single phone call. Full certification, no markup surprises, delivered on schedule.'
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'Technical Sourcing Lead, Energy Systems Corp',
    avatar: '/assets/avatar-4.png',
    quote: 'Superb attention to detail and outstanding project management. They delivered our high-precision structural beams and anchor bolts ahead of schedule.'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Operations Director, Apex Logistics Hub',
    avatar: '/assets/testi-avatar-3.png',
    quote: 'Exceptional quality assurance. The mill test certificates (MTC) were perfect, and the transition from import clearance to job site delivery was seamless.'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'VP of Engineering, Civil Partners Inc',
    avatar: '/assets/testi-avatar-4.png',
    quote: 'Their structural advisory was invaluable. They optimized our section profiles, saving us significant material costs while maintaining full code compliance.'
  },
  {
    id: 5,
    name: 'Emily Carter',
    role: 'Project Manager, Metro Developers',
    avatar: '/assets/testi-avatar-5.png',
    quote: 'Reliable, transparent, and highly communicative. We\'ve found a long-term partner for our multi-phase steel framing and decking needs.'
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const activeTestimonial = testimonialsData[activeIndex];

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
              {testimonialsData.map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`tm-avatar-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img src={t.avatar} alt={t.name} />
                </div>
              ))}
            </div>
            
            <div className="tm-quote-box">
              <div className="tm-stars">
                <img src="/assets/rating-stars-orange.svg" alt="5 Stars" />
              </div>
              <p className="tm-quote-text">
                "{activeTestimonial.quote}"
              </p>
              <div className="tm-quote-author">
                <h4>{activeTestimonial.name}</h4>
                <p>{activeTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Image and Stats */}
          <div className="tm-col-2">
            <div className="tm-image-card">
              <img src="/assets/product-3.jpg" alt="Steel mill loading dock" className="tm-img-bg" />
              <div className="tm-img-overlay">
                <p className="tm-img-year">// 2005-2K26 //</p>
                <div className="tm-logo-text">50stars</div>
              </div>
            </div>
            
            <div className="tm-stats-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={98} />%</h3>
                <p style={{ fontSize: '0.75rem' }}>On-time delivery</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={250000} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Tons procured</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={120} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Global partners</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={9} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Product categories</p>
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
              <h4 className="tm-support-title">Need help selecting the right steel grade, profile, or sourcing strategy?</h4>
              <p className="tm-support-desc">We're ready with product specs, certification guidance, and sourcing support at every stage.</p>
              
              <a href="/contact" className="btn-white-solid tm-support-btn" onClick={(e) => navigateTo(e, '/contact')}>
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
