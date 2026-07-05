import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './CaseStudySection.css';

const caseStudies = [
  {
    id: 1,
    title: 'Lightweight castings for Industrial equipment',
    description: 'Redesigned metal castings to reduce material use and maintain strength, optimizing cost and weight.',
    stat: '35%',
    scope: 'Heavy-duty machinery',
    image: '/assets/case-1.webp',
    logo: '/assets/logo-1.svg'
  },
  {
    id: 2,
    title: 'Precision CNC milling for automotive components',
    description: 'Improved machining process to achieve tighter tolerances and faster production cycles for car parts.',
    stat: '54%',
    scope: 'Engine components',
    image: '/assets/case-2.webp',
    logo: '/assets/logo-2.svg'
  },
  {
    id: 3,
    title: 'Additive manufacturing for custom tooling',
    description: 'Implemented 3D-printed tools to accelerate prototyping and reduce lead time in production.',
    stat: '50%',
    scope: 'Traditional tooling',
    image: '/assets/case-3.webp',
    logo: '/assets/logo-3.svg'
  },
  {
    id: 4,
    title: 'Automated assembly line optimization',
    description: 'Streamlined assembly processes with robotics, reducing labor costs and improving output consistency.',
    stat: '62%',
    scope: 'Assembly process',
    image: '/assets/case-4.webp',
    logo: '/assets/logo-4.svg'
  }
];

const CaseStudySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const activeCase = caseStudies[currentIndex];

  return (
    <section className="case-study-section" id="case-study">
      <div className="cs-container">
        
        {/* Header */}
        <div className="cs-header">
          <div className="cs-header-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">Real-world success</span>
            </div>
            <h2 className="cs-title">
              Real <span className="text-orange">results</span> from real projects
            </h2>
          </div>
          <div className="cs-header-controls">
            <button className="btn-slider-nav" onClick={handlePrev} aria-label="Previous case study">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button className="btn-slider-nav" onClick={handleNext} aria-label="Next case study">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Slider Content */}
        <div className="cs-slider-window">
          <div className="cs-slide active">
            
            <div className="cs-left-block">
              <div className="cs-shadow-bg">
                <img src="/assets/case-shadow.png" alt="Glow Shadow" />
              </div>
              
              <div className="cs-left-top">
                <h3 className="cs-card-title">{activeCase.title}</h3>
                <p className="cs-card-desc">{activeCase.description}</p>
              </div>
              
              <div className="cs-left-bottom">
                <div className="cs-stats">
                  <h4 className="cs-stat-number">{activeCase.stat}</h4>
                  <p className="cs-stat-label">{activeCase.scope}</p>
                </div>
                <a href="#case" className="btn-view-case">
                  <span className="btn-vc-text">View case</span>
                  <span className="btn-vc-icon">
                    <img src="/assets/icon-arrow.svg" alt="Arrow" />
                  </span>
                </a>
              </div>
            </div>

            <div className="cs-right-block">
              <div className="cs-client-logo">
                <img src={activeCase.logo} alt="Client Logo" />
              </div>
              <div className="cs-image-wrap">
                <img src={activeCase.image} alt={activeCase.title} />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="cs-bottom-banner">
          <div className="cs-banner-left">
            <div className="cs-avatars">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Agent 1" className="cs-avatar" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Agent 2" className="cs-avatar" />
            </div>
            <div className="cs-banner-text">
              <h4 className="cs-banner-title">Open a conversation</h4>
              <p className="cs-banner-desc">Contact us to explore solutions tailored to your needs.</p>
            </div>
          </div>
          <div className="cs-banner-right">
            <a href="#contact" className="btn-contact-black">
              <span className="btn-cb-text">Contact us now</span>
              <span className="btn-cb-icon">
                <img src="/assets/icon-arrow.svg" alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;
