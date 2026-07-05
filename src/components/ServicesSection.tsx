import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    icon: 'https://framerusercontent.com/images/8A2bCLa6pyOXwAS0i8tAQrdLhTU.svg?width=41&height=41',
    image: 'https://framerusercontent.com/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp?width=1400&height=800',
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
    icon: 'https://framerusercontent.com/images/M3RsKCQRcVWO3EHXmo2ZCQP0MlE.svg?width=40&height=41',
    image: 'https://framerusercontent.com/images/uyAxZj87pJISHmPmWJFmfS2Xqw.webp?width=1400&height=800',
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
    icon: 'https://framerusercontent.com/images/RHYjItVmJDKaNWe0N2Hs5P3hUs.svg?width=38&height=41',
    image: 'https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp?width=1400&height=800',
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
    icon: 'https://framerusercontent.com/images/qyDGFu1whE5nbKHXtS8LQpIfAu4.svg?width=39&height=41',
    image: 'https://framerusercontent.com/images/DC7FRNfj79xbtthq0V0ykebbAGU.webp?width=1400&height=800',
    title: 'Injection molding',
    features: [
      '50-1000 ton molding machines',
      'Multi-cavity tooling design',
      'Insert molding capabilities',
      'Cleanroom Fabrication Unit'
    ]
  }
];

const checkIcon = 'https://framerusercontent.com/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg?width=15&height=10';
const arrowIcon = 'https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg?width=16&height=12';
const ctaBg = 'https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png?width=1078&height=178';

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
