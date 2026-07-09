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
        
        {/* Intro Block: Why 50 Stars */}
        <div className="wc-intro-block">
          
          <div className="wc-intro-grid">
            <div className="wc-intro-col-left">
              <div className="pill-who-we-are" style={{ marginBottom: '1.25rem' }}>
                <div className="pill-gradient-square"></div>
                <span className="pill-text">Why 50 Stars</span>
              </div>
              <h2 className="wc-main-title">
                One supplier. Every material. <br className="hidden-mobile" />Mill to job site.
              </h2>
              <p className="wc-lead-text">
                50 Stars isn't a broker. We're the procurement partner general contractors, EPCs, and subcontractors call before they call anyone else — for steel, for fabrication, for the materials shortages that are slowing down every job in the country right now.
              </p>
            </div>
            <div className="wc-intro-col-right">
              <h4 className="wc-network-title">Global Partner Network</h4>
              <ul className="wc-network-list">
                <li>
                  <strong className="wc-network-country">Japan</strong> — precision structural steel and specialty alloys
                </li>
                <li>
                  <strong className="wc-network-country">Singapore</strong> — regional sourcing and logistics hub for Southeast Asia
                </li>
                <li>
                  <strong className="wc-network-country">Turkey</strong> — competitive structural steel with strong export infrastructure
                </li>
                <li>
                  <strong className="wc-network-country">Philippines</strong> — fabrication and cost-competitive supply
                </li>
                <li>
                  <strong className="wc-network-country">Europe</strong> — premium-grade steel and compliance-certified materials
                </li>
              </ul>
              
              <div className="wc-network-callout">
                <p>
                  Combined with our in-house fabrication coordination, this network means 50 Stars can source, certify, fabricate, and deliver — without you managing five different vendor relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Block: Why General Contractors Choose 50 Stars */}
        <div className="wc-benefits-block">
          <h3 className="wc-section-subtitle">Why General Contractors Choose 50 Stars</h3>
          
          <div className="wc-benefits-grid">
            <div className="wc-benefits-left">
              {/* Card 1 */}
              <div className="wc-benefit-card wc-card-shortage">
                <div className="wc-card-num-bg">01</div>
                <div className="wc-card-header">
                  <span className="wc-benefit-num">1</span>
                  <h4 className="wc-benefit-title">We solve the shortage problem</h4>
                </div>
                <p className="wc-benefit-desc">
                  US steel and materials shortages have made project timelines unpredictable. GCs are increasingly referring their subcontractors to 50 Stars because we maintain live global sourcing relationships that domestic-only suppliers can't match — when your regular mill is backlogged, we already have the alternative lined up.
                </p>
              </div>

              {/* Card 2 */}
              <div className="wc-benefit-card wc-card-pricing">
                <div className="wc-card-num-bg">02</div>
                <div className="wc-card-header">
                  <span className="wc-benefit-num">2</span>
                  <h4 className="wc-benefit-title">Better pricing, structured simply</h4>
                </div>
                <p className="wc-benefit-desc">
                  We negotiate directly with mills and fabricators across our partner network, which means better pricing passed straight to you — not layered through multiple middlemen.
                </p>
              </div>
            </div>

            {/* Card 3 (Pricing Tier) */}
            <div className="wc-benefit-card wc-card-pricing-table">
              <div className="wc-card-num-bg">03</div>
              <div className="wc-card-header-horizontal">
                <div className="wc-card-header-left">
                  <span className="wc-benefit-num">3</span>
                  <h4 className="wc-benefit-title">Transparent flat-fee pricing</h4>
                </div>
                <p className="wc-benefit-desc-top">
                  No hidden markups, no per-project renegotiation. Our flat-fee structure scales with your order volume:
                </p>
              </div>

              <div className="wc-table-wrapper">
                <table className="wc-pricing-table">
                  <thead>
                    <tr>
                      <th>Order Volume</th>
                      <th>Fee per Ton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Less than 500 tons</td>
                      <td className="wc-fee-val">$39<span className="wc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>500 – 1,800 tons</td>
                      <td className="wc-fee-val">$28<span className="wc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>1,800 – 5,000 tons</td>
                      <td className="wc-fee-val">$21<span className="wc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>Above 5,000 tons</td>
                      <td className="wc-fee-val">$19<span className="wc-fee-unit">/ton</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="wc-table-caption">
                The bigger the order, the lower your per-ton cost — built for GCs and EPCs running real project volume, not one-off buys.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;

