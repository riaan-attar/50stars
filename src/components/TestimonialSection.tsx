import React, { useState } from 'react';
import './TestimonialSection.css';
import AnimatedNumber from './AnimatedNumber';

const testimonialsData = [
  {
    id: 1,
    name: 'Emily Carter',
    role: 'Product Designer',
    avatar: '/assets/testi-avatar-1.png',
    quote: 'The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.'
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'Technical Lead',
    avatar: '/assets/avatar-4.png',
    quote: 'Superb attention to detail and outstanding project management. They delivered our high-precision parts ahead of schedule.'
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Operations Director',
    avatar: '/assets/testi-avatar-3.png',
    quote: 'Exceptional quality assurance. The prototypes were perfect, and the transition to full-scale manufacturing was seamless.'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    avatar: '/assets/testi-avatar-4.png',
    quote: 'Their engineering support was invaluable. They optimized our design for manufacturability, saving us significant production costs.'
  },
  {
    id: 5,
    name: 'James Mitchell',
    role: 'Procurement Manager',
    avatar: '/assets/testi-avatar-5.png',
    quote: 'Reliable, transparent, and highly communicative. We\'ve found a long-term partner for our custom injection molding needs.'
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
