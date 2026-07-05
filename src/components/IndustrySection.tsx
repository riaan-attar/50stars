import React, { useState } from 'react';
import './IndustrySection.css';

const industries = [
  {
    id: 'aerospace',
    tabLabel: 'Aerospace industry',
    title: 'Aerospace',
    description: 'Certified aerospace components built for mission-critical performance and full traceability.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry-aerospace.jpg',
    features: [
      'Full material traceability',
      'NADCAP special process approval',
      'Critical safety component expertise'
    ]
  },
  {
    id: 'automotive',
    tabLabel: 'Automotive',
    title: 'Automotive',
    description: 'High-volume precision manufacturing to keep your supply chain moving efficiently.',
    icon: '/assets/icon-aerospace.svg', 
    image: '/assets/product-1.webp',
    features: [
      'High volume production',
      'TS16949 certified quality',
      'Just-in-time delivery'
    ]
  },
  {
    id: 'medical',
    tabLabel: 'Medical devices',
    title: 'Medical devices',
    description: 'High-precision medical devices for safer, more effective patient care and diagnostics.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/product-2.png', 
    features: [
      'Enhanced Patient Care',
      'Safety and Reliability',
      'Operational Efficiency'
    ]
  },
  {
    id: 'energy',
    tabLabel: 'Energy & power',
    title: 'Energy & power',
    description: 'Durable, high-strength components designed for harsh environments and demanding applications.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/product-3.webp',
    features: [
      'Extreme environment testing',
      'Large-scale machining',
      'Corrosion resistant materials'
    ]
  },
  {
    id: 'industrial',
    tabLabel: 'Industrial equipment',
    title: 'Industrial equipment',
    description: 'Robust assemblies and parts to keep heavy machinery running at peak performance.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/product-4.webp',
    features: [
      'Heavy duty assemblies',
      'Tight tolerance controls',
      'Long lifecycle durability'
    ]
  }
];

const IndustrySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const currentIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <section className="industry-section" id="industry">
      
      {/* Background Noise & Floating Images */}
      <div className="is-bg-noise" style={{ backgroundImage: 'url(/assets/bg-noise.gif)' }}></div>
      <img src="/assets/float-1.png" alt="" className="float-img float-1" />
      <img src="/assets/float-2.png" alt="" className="float-img float-2" />
      <img src="/assets/float-3.png" alt="" className="float-img float-3" />
      <img src="/assets/float-4.png" alt="" className="float-img float-4" />
      <img src="/assets/float-5.png" alt="" className="float-img float-5" />

      {/* Grid Lines Overlay */}
      <div className="is-grid-lines">
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line" style={{ borderRight: '1px dashed rgba(0,0,0,0.05)' }}></div>
      </div>

      <div className="industry-container">
        
        {/* Header */}
        <div className="industry-header">
          <div className="pill-who-we-are" style={{ margin: '0 auto 1.5rem auto' }}>
            <div className="pill-gradient-square"></div>
            <span className="pill-text">Build for every industry</span>
          </div>
          <h2 className="industry-title">
            Manufacturing <span className="text-orange">solutions</span><br/>for every industry
          </h2>
        </div>

        {/* Content Area */}
        <div className="industry-content">
          
          {/* Tabs List */}
          <div className="industry-tabs">
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`industry-tab ${activeTab === ind.id ? 'active' : ''}`}
                onClick={() => setActiveTab(ind.id)}
              >
                {ind.tabLabel}
              </button>
            ))}
          </div>

          {/* Active Panel */}
          <div className="industry-panel">
            <div className="panel-inner">
              
              <div className="panel-image-wrap">
                <img src={currentIndustry.image} alt={currentIndustry.title} />
              </div>
              
              <div className="panel-content">
                <div className="pc-top">
                  <div className="pc-icon">
                    <img src={currentIndustry.icon} alt="Icon" />
                  </div>
                  <h4 className="pc-title">{currentIndustry.title}</h4>
                  <p className="pc-desc">{currentIndustry.description}</p>
                </div>
                
                <div className="pc-bottom">
                  <ul className="pc-features">
                    {currentIndustry.features.map((feature, idx) => (
                      <li key={idx}>
                        <img src="/assets/icon-check.svg" alt="Check" className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
