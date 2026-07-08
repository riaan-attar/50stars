import React from 'react';
import './ProductsPage.css';

const productsData = [
  {
    title: "Structural Steel",
    image: "/assets/product-1.webp",
    standard: "ASTM A36 / A572 / A992 / EN 10025",
    sourcing: "Global Mill Partnerships",
    members: "Beams (W, HP, S, M), girders, channels, leg angles, sheet plates"
  },
  {
    title: "Joists & Long-Span Systems",
    image: "/assets/product-3.webp",
    standard: "Steel Joist Institute (SJI) Specs",
    sourcing: "Pre-Qualified Fabricators",
    members: "Open-web steel joists (K-series, LH/DLH), joist girders"
  },
  {
    title: "Hollow & Tubular Sections",
    image: "/assets/product-2.png",
    standard: "ASTM A500 / A1085 / EN 10219",
    sourcing: "Vetted Tube Mills",
    members: "Square (SHS), rectangular (RHS), circular (CHS), H-piles"
  },
  {
    title: "Fasteners & Connection Hardware",
    image: "/assets/product-5.png",
    standard: "ASTM F1554 / A325 / A490",
    sourcing: "Approved Bolt & Anchor Mills",
    members: "Anchor bolts, structural bolts, washers, nuts, base/embed plates"
  },
  {
    title: "Reinforcement & Concrete-Adjacent",
    image: "/assets/product-6.png",
    standard: "ASTM A615 / A706",
    sourcing: "Domestic & Global Mills",
    members: "Rebar, welded wire mesh, precast embed plates and inserts"
  },
  {
    title: "Decking, Access & Safety",
    image: "/assets/product-7.png",
    standard: "Steel Deck Institute (SDI) Specs",
    sourcing: "Vetted Decking Manufacturers",
    members: "Metal decking, bar grating, checkered plate, stairs, handrails"
  },
  {
    title: "Specialty & Corrosion-Resistant",
    image: "/assets/product-4.webp",
    standard: "ASTM A240 / A588 / A123",
    sourcing: "Specialized Mills",
    members: "Stainless steel sections, weathering steel (Corten), galvanized steel"
  },
  {
    title: "Support & Ancillary Structural Steel",
    image: "/assets/product-8.png",
    standard: "ASTM / AISC Specifications",
    sourcing: "Qualified Fabrication Partners",
    members: "Pipe racks, cable tray support steel, expansion joints, bearing pads"
  },
  {
    title: "Site & Project Support Materials",
    image: "/assets/service-1.webp",
    standard: "AWS / ANSI Standards",
    sourcing: "Distribution Partners",
    members: "Welding consumables, industrial coatings, rigging, scaffolding"
  }
];

const ProductsPage: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="products-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="products-hero-section">
        <div className="products-hero-container">
          <div className="products-hero-top">
            <div className="products-hero-left">
              {/* Badge */}
              <div className="products-badge">
                <div className="badge-gradient-square"></div>
                <span className="badge-text">What we procure</span>
              </div>
              {/* Title */}
              <h1 className="products-hero-title">
                Certified <span className="text-orange">products</span> delivered to your job site
              </h1>
            </div>

            <div className="products-hero-right">
              {/* Contact Button */}
              <a href="/contact" className="products-hero-btn" onClick={(e) => navigateTo(e, '/contact')}>
                <span className="btn-text">Contact now</span>
                <span className="btn-icon-box">
                  <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>

          {/* 2. PRODUCTS GRID */}
          <div className="products-grid-catalog">
            {productsData.map((product, index) => (
              <div key={index} className="product-catalog-card">
                <div className="product-card-top">
                  <h2>{product.title}</h2>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-card-photo" />
                  </div>
                </div>

                <div className="product-card-bottom">
                  <div className="product-spec-row">
                    <span className="spec-label">Standard</span>
                    <span className="spec-value">{product.standard}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <div className="product-spec-row">
                    <span className="spec-label">Sourcing</span>
                    <span className="spec-value">{product.sourcing}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <div className="product-spec-row">
                    <span className="spec-label">Members</span>
                    <span className="spec-value">{product.members}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spec Note Footer */}
          <div className="products-spec-note-wrap" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#151515', borderRadius: '6px', borderLeft: '4px solid var(--color-orange)' }}>
            <p style={{ color: '#c5c1c0', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>
              <strong>Spec note:</strong> every item shipped with full mill test certificates (MTC) and chain-of-custody documentation, matched to the ASTM/AISC/EN/regional standard your project requires.
            </p>
          </div>

          {/* 3. BOTTOM CTA BANNER */}
          <div className="products-cta-banner-wrapper">
            <div className="products-cta-banner" style={{ backgroundImage: 'url("/assets/products-cta-bg.png")' }}>
              <div className="products-cta-content">
                <h2>Custom order inquiry</h2>
                <p>
                  Looking for a structural member or specialty steel grade not listed here? Send us your project drawings and custom specifications, and our engineering team will review them.
                </p>
              </div>
              
              <div className="products-cta-action">
                <a href="/contact" className="btn-products-cta" onClick={(e) => navigateTo(e, '/contact')}>
                  <span className="btn-cta-text">Send request</span>
                  <span className="btn-cta-icon-box">
                    <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Background Grid Lines & Noise */}
        <div className="products-bg-overlay">
          <div className="products-bg-grid">
            <div className="products-bg-grid-lines">
              <div className="products-grid-line"></div>
              <div className="products-grid-line"></div>
              <div className="products-grid-line"></div>
              <div className="products-grid-line hidden-tablet"></div>
              <div className="products-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="products-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
