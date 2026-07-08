import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    icon: '/assets/service-icon-1.svg',
    image: '/assets/service-1.webp',
    title: 'Structural Steel & Materials Sourcing',
    features: [
      'Global mill sourcing across every major steel-producing region',
      'Beams, joists, hollow sections, plate, angles, rebar, and specialty alloys',
      'Multi-origin comparison for cost, grade, and lead time'
    ]
  },
  {
    id: 2,
    icon: '/assets/service-icon-2.svg',
    image: '/assets/service-2.webp',
    title: 'Engineering & Procurement Advisory',
    features: [
      'BOM and takeoff review against project drawings and specs',
      'Grade and section matching to ASTM/AISC/EN/regional codes',
      'Value engineering — alternate sections or grades to reduce cost without compromising design intent',
      'Split-sourcing strategy for long-lead or oversized members'
    ]
  },
  {
    id: 3,
    icon: '/assets/service-icon-3.svg',
    image: '/assets/service-3.webp',
    title: 'Quality Assurance & Certification',
    features: [
      'Full mill test certificates (MTC) on every shipment',
      'Chain-of-custody documentation',
      'Third-party inspection coordination where required',
      'Dimensional, coating, and grade verification before release'
    ]
  },
  {
    id: 4,
    icon: '/assets/service-icon-4.svg',
    image: '/assets/service-4.webp',
    title: 'Global Logistics & Freight',
    features: [
      'Flat rack, breakbulk, container, and OOG (out-of-gauge) cargo coordination',
      'Port-to-port and port-to-site trucking',
      'Customs clearance and import documentation',
      'Shipment tracking and delivery scheduling aligned to erection sequence'
    ]
  }
];

const checkIcon = '/assets/icon-check.svg';
const arrowIcon = '/assets/icon-arrow.svg';
const ctaBg = '/assets/services-cta-bg.png';

const ServicesSection: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

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
              End-to-end procurement, <span className="text-orange">engineering</span>, and logistics — not just a steel quote
            </h2>
          </div>
          <div className="sh-right">
            <a href="/services" className="btn-learn-more" onClick={(e) => navigateTo(e, '/services')}>
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
                <button className="btn-icon-orange" onClick={(e) => navigateTo(e, '/services')}>
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
            <h2 className="cta-title">Ready to source your next structural steel package?</h2>
            <button className="btn-cta-white" onClick={(e) => navigateTo(e, '/contact')}>
              <span className="btn-cw-text">Schedule a Consultation</span>
              <span className="btn-cw-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
