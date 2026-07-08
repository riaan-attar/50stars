import React from 'react';
import './ProductsSection.css';
import AnimatedNumber from './AnimatedNumber';

const productsData = [
  {
    id: 1,
    title: 'Structural Steel',
    image: '/assets/product-1.webp',
    standard: 'ASTM A36 / A572 / A992 / EN 10025',
    sourcing: 'Global Mill Partnerships',
    members: 'Wide-flange beams, built-up plate girders, channels, equal/unequal angles, plate and sheet steel',
  },
  {
    id: 2,
    title: 'Hollow & Tubular Sections',
    image: '/assets/product-2.png',
    standard: 'ASTM A500 / A1085 / EN 10219',
    sourcing: 'Vetted Tube Mills',
    members: 'Square (SHS), rectangular (RHS), circular (CHS) sections, pipe piles and H-piles',
  },
  {
    id: 3,
    title: 'Joists & Long-Span Systems',
    image: '/assets/product-3.webp',
    standard: 'Steel Joist Institute (SJI) Specs',
    sourcing: 'Specialized Fabricators',
    members: 'Open-web steel joists (K-series, LH/DLH), joist girders, long-span roof/floor framing systems',
  },
  {
    id: 4,
    title: 'Specialty & Corrosion-Resistant',
    image: '/assets/product-4.webp',
    standard: 'ASTM A240 / A588 (Corten) / Galvanized',
    sourcing: 'Specialized Sourcing Network',
    members: 'Stainless steel structural sections, weathering steel (Corten), galvanized and coated steel',
  },
];

const ProductsSection: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="products-section" id="products">
      {/* Background shadow image at the top */}
      <div className="ps-bg-shadow">
        <img src="/assets/product-bg-shadow.png" alt="Background Shadow" />
      </div>

      <div className="ps-container">
        {/* Header */}
        <div className="ps-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text" style={{ color: 'var(--color-white)' }}>What we procure</span>
          </div>

          <div className="ps-header-content">
            <h2 className="ps-counter">
              <AnimatedNumber value={9} /><span className="text-orange">+</span>
            </h2>
            <p className="ps-subtitle">
              Certified product categories delivered to job sites across industries and continents.
            </p>
          </div>
        </div>

        {/* Big Diagram */}
        <div className="ps-diagram-container">
          <img src="/assets/product-diagram.svg" alt="Product exploded view" className="ps-diagram" />
        </div>

        {/* Product Grid */}
        <div className="ps-grid">
          {productsData.map((product) => (
            <div className="ps-card" key={product.id}>
              <h3 className="ps-card-title">{product.title}</h3>
              <div className="ps-card-image-wrap">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="ps-specs-list">
                <div className="ps-spec-row">
                  <span className="ps-spec-label">Standard</span>
                  <span className="ps-spec-value">{product.standard}</span>
                </div>
                <div className="ps-divider"></div>
                <div className="ps-spec-row">
                  <span className="ps-spec-label">Sourcing</span>
                  <span className="ps-spec-value">{product.sourcing}</span>
                </div>
                <div className="ps-divider"></div>
                <div className="ps-spec-row">
                  <span className="ps-spec-label">Members</span>
                  <span className="ps-spec-value">{product.members}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="ps-footer">
          <h2 className="ps-footer-title">
            Explore our complete product<br />range across industries.
          </h2>
          <div className="ps-footer-actions">
            <a href="/assets/about-brochure.pdf" download className="btn-download-white">
              Download Brochure
              <img src="/assets/icon-download.svg" alt="Download" />
            </a>
            
            <a href="/products" className="btn-orange-solid" onClick={(e) => navigateTo(e, '/products')}>
              <span className="btn-os-text">View all products</span>
              <span className="btn-os-icon">
                <img src="/assets/icon-arrow.svg" alt="Arrow" />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
