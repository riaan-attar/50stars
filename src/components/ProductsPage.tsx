import React from 'react';
import './ProductsPage.css';

const productsData = [
  {
    title: "Aluminum gear housing",
    image: "/assets/product-1.webp",
    material: "Aluminum 6061 / 7075",
    capability: "CNC machining",
    size: "Custom dimensions up to 500mm"
  },
  {
    title: "Custom plastic enclosures",
    image: "/assets/product-2.png",
    material: "ABS, Polycarbonate, Nylon",
    capability: "Injection molding",
    size: "Varies – custom moldable"
  },
  {
    title: "Electrical control panels",
    image: "/assets/product-3.webp",
    material: "Mild Steel, Stainless Steel",
    capability: "Sheet metal fabrication & Assembly",
    size: "Small to full-scale cabinets"
  },
  {
    title: "Precision shaft assemblies",
    image: "/assets/product-4.webp",
    material: "Alloy Steel, Stainless steel",
    capability: "Turning & Grinding",
    size: "Up to 1200mm"
  },
  {
    title: "Power distribution boards",
    image: "/assets/product-5.png",
    material: "Mild Steel, Stainless steel",
    capability: "Sheet Metal fabrication & Assembly",
    size: "Small to large-scale units"
  },
  {
    title: "Copper busbar systems",
    image: "/assets/product-6.png",
    material: "Copper / Aluminum busbars",
    capability: "Metal fabrication & Assembly",
    size: "Medium to large"
  },
  {
    title: "Stainless steel junction boxes",
    image: "/assets/product-7.png",
    material: "Stainless steel 304 / 316",
    capability: "Laser cutting & Welding",
    size: "Small to medium"
  },
  {
    title: "Titanium sensor housings",
    image: "/assets/product-8.png",
    material: "Titanium alloy",
    capability: "Precision CNC machining",
    size: "Small"
  }
];

const ProductsPage: React.FC = () => {
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
                <span className="badge-text">What we manufacture</span>
              </div>
              {/* Title */}
              <h1 className="products-hero-title">
                Innovative <span className="text-orange">products</span> across all sectors
              </h1>
            </div>

            <div className="products-hero-right">
              {/* Contact Button */}
              <a href="/contact" className="products-hero-btn">
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
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>

                <div className="product-card-bottom">
                  <div className="product-spec-row">
                    <span className="spec-label">Material</span>
                    <span className="spec-value">{product.material}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <div className="product-spec-row">
                    <span className="spec-label">Capability</span>
                    <span className="spec-value">{product.capability}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <div className="product-spec-row">
                    <span className="spec-label">Size range</span>
                    <span className="spec-value">{product.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. BOTTOM CTA BANNER */}
          <div className="products-cta-banner-wrapper">
            <div className="products-cta-banner" style={{ backgroundImage: 'url("/assets/products-cta-bg.png")' }}>
              <div className="products-cta-content">
                <h2>Custom order inquiry</h2>
                <p>
                  Looking for a product we don't offer yet? Send us your custom specifications and we will take it forward from there.
                </p>
              </div>
              
              <div className="products-cta-action">
                <a href="/contact" className="btn-products-cta">
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
