import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    icon: '/assets/service-icon-1.svg',
    image: '/assets/service-1.webp',
    title: 'Product assembly',
    features: [
      'Manual & automated assembly',
      'Functional testing protocols',
      'Custom packaging design',
      'Supply chain management'
    ]
  },
  {
    id: 2,
    icon: '/assets/service-icon-2.svg',
    image: '/assets/service-2.webp',
    title: 'Sheet metal fabrication',
    features: [
      'Laser cutting up to 1" thickness',
      'Press brake forming',
      'TIG/MIG welding services',
      'Powder coating & finishing'
    ]
  },
  {
    id: 3,
    icon: '/assets/service-icon-3.svg',
    image: '/assets/service-3.webp',
    title: 'CNC machining services',
    features: [
      '±0.0001" tolerance capability',
      'Multi-axis machining centers',
      'Materials: Metals, plastics, composites',
      'Prototype to production volumes'
    ]
  },
  {
    id: 4,
    icon: '/assets/service-icon-4.svg',
    image: '/assets/service-4.webp',
    title: 'Injection molding',
    features: [
      '50-1000 ton molding machines',
      'Multi-cavity tooling design',
      'Insert molding capabilities',
      'Cleanroom Fabrication Unit'
    ]
  }
];

const checkIcon = '/assets/icon-check.svg';
const arrowIcon = '/assets/icon-arrow.svg';
const ctaBg = '/assets/services-cta-bg.png';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <div className="sh-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">What we do</span>
            </div>
            <h2 className="services-title">
              Scalable <span className="text-orange">capabilities</span><br/>for every challenge
            </h2>
          </div>
          <div className="sh-right">
            <a href="#capabilities" className="btn-learn-more">
              <span className="btn-lm-text">Explore all capabilities</span>
              <span className="btn-lm-icon">
                <img src={arrowIcon} alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
              </span>
            </a>
          </div>
        </div>

        {/* Services List */}
        <div className="services-list">
          {servicesData.map((service) => (
            <div className="service-row" key={service.id}>
              
              {/* Icon & Image */}
              <div className="sr-visuals">
                <img src={service.icon} alt="Service Icon" className="sr-icon" />
                <div className="sr-image-wrap">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
              
              {/* Content */}
              <div className="sr-content">
                <h3 className="sr-title">{service.title}</h3>
                
                <div className="sr-features-block">
                  <p className="sr-features-label">Features</p>
                  <ul className="sr-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <img src={checkIcon} alt="Check" className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="sr-action">
                <button className="btn-icon-orange">
                  <img src={arrowIcon} alt="Go" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <img src={ctaBg} alt="CTA Background" className="cta-bg-image" />
          <div className="cta-content">
            <h2 className="cta-title">Ready to start your next project?</h2>
            <a href="#contact" className="btn-cta-white">
              <span className="btn-cw-text">Schedule consultation</span>
              <span className="btn-cw-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
