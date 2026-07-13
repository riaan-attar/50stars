import React, { useState } from 'react';
import './TestimonialSection.css';
import AnimatedNumber from './AnimatedNumber';

const testimonialsData = [
  {
    id: 1,
    name: 'Gary Stein',
    role: 'CEO, Triple-S Steel Holdings',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80',
    quote: "We've built our reputation on reliable steel distribution, and 50 Stars' international sourcing and trading arm has been a key asset in helping us manage bulk supply and trade-flow logistics globally."
  },
  {
    id: 2,
    name: 'John P. Sandok',
    role: 'Director of Sourcing, Leeco Steel, LLC',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
    quote: "Quality assurance is everything when importing foreign plate steel. 50 Stars' compliance checking and mill test audit support ensure that every plate meets ASTM and AISC code before it hits our distribution centers."
  },
  {
    id: 3,
    name: 'Dave C. Harris',
    role: 'Vice President of Construction, Schuff Steel',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80',
    quote: "As the nation's largest structural fabricator, we demand speed and precision. 50 Stars has consistently met our requirements for high-strength columns, composite decking, and just-in-time logistics coordination."
  },
  {
    id: 4,
    name: 'Mark S. Miller',
    role: 'Chief Operations Officer, SME Steel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
    quote: "Coordinating heavy-member plate girders and complex connection steel is a logistical challenge. 50 Stars manages our supply chain with absolute transparency and unmatched mill-to-job-site tracking."
  },
  {
    id: 5,
    name: 'Patricia S. Walker',
    role: 'Supply Chain Specialist, Samuel, Son & Co.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
    quote: "Operating a multi-location distribution model is complex. 50 Stars is our go-to partner for sourcing specialized structural shapes and ensuring mill test certificate traceability across our regional hubs."
  },
  {
    id: 6,
    name: 'Christopher B. Hall',
    role: 'Supply Chain Director, O\'Neal Steel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
    quote: "Sourcing both domestic and imported sections can be a nightmare to track. 50 Stars makes it easy by coordinating the entire mill test reporting process and streamlining logistics across our regional hubs."
  },
  {
    id: 7,
    name: 'Linda M. Ross',
    role: 'Logistics Lead, Continental Steel & Tube Co.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
    quote: "Their support for structural steel tubes and hollow sections is unmatched. They optimized our bulk distribution runs and consistently deliver full AISC compliance certifications."
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
