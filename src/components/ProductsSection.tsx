import React from 'react';
import './ProductsSection.css';

const productsData = [
  {
    id: 1,
    title: 'Aluminum gear housing',
    image: '/assets/product-1.webp',
    material: 'Aluminum 6061 / 7075',
    capability: 'CNC Machining',
    size: 'Custom dimensions up to 500mm',
  },
  {
    id: 2,
    title: 'Custom plastic enclosures',
    image: '/assets/product-2.png',
    material: 'ABS, Polycarbonate, Nylon',
    capability: 'Injection Molding',
    size: 'Varies – custom moldable',
  },
  {
    id: 3,
    title: 'Electrical control panels',
    image: '/assets/product-3.webp',
    material: 'Mild Steel, Stainless Steel',
    capability: 'Sheet Metal Fabrication & Assembly',
    size: 'Small to full-scale cabinets',
  },
  {
    id: 4,
    title: 'Precision shaft assemblies',
    image: '/assets/product-4.webp',
    material: 'Alloy Steel, Stainless Steel',
    capability: 'Turning & Grinding',
    size: 'Up to 1200mm',
  },
];

const ProductsSection: React.FC = () => {
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
            <span className="pill-text" style={{ color: 'var(--color-white)' }}>What we manufacture</span>
          </div>

          <div className="ps-header-content">
            <h2 className="ps-counter">
              50,000<span className="text-orange">+</span>
            </h2>
            <p className="ps-subtitle">
              Precision-built products delivered to clients across industries and continents.
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
                  <span className="ps-spec-label">Material</span>
                  <span className="ps-spec-value">{product.material}</span>
                </div>
                <div className="ps-divider"></div>
                <div className="ps-spec-row">
                  <span className="ps-spec-label">Capability</span>
                  <span className="ps-spec-value">{product.capability}</span>
                </div>
                <div className="ps-divider"></div>
                <div className="ps-spec-row">
                  <span className="ps-spec-label">Size Range</span>
                  <span className="ps-spec-value">{product.size}</span>
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
            <a href="/assets/brochure.pdf" download className="btn-download-white">
              Download brochure
              <img src="/assets/icon-download.svg" alt="Download" />
            </a>
            
            <a href="#product" className="btn-orange-solid">
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
