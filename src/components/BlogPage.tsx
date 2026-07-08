import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    title: 'Navigating Global Steel Tariffs: Sourcing Strategies for 2026',
    description: 'An in-depth look at how regional tariff shifts impact steel import logistics, and how split-sourcing structures can hedge against sudden price spikes.',
    category: 'Trade Compliance',
    date: 'July 2, 2026',
    readTime: '6 min read',
    image: '/assets/service-2.webp'
  },
  {
    id: 2,
    title: 'Understanding Mill Test Certificates (MTCs) and Sourcing Compliance',
    description: 'How to read and verify EN 10204 3.1 certificates, and why strict material traceability is vital for civil infrastructure project approvals.',
    category: 'Quality Assurance',
    date: 'June 25, 2026',
    readTime: '5 min read',
    image: '/assets/service-3.webp'
  },
  {
    id: 3,
    title: 'The Logistics of Out-of-Gauge (OOG) Steel Member Shipping',
    description: 'From breakbulk ships to flat racks, explore the freight engineering behind shipping oversized wide-flange beams and prefabricated roof trusses.',
    category: 'Global Logistics',
    date: 'May 18, 2026',
    readTime: '8 min read',
    image: '/assets/service-4.webp'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="blog-hero-section">
        <div className="blog-hero-container">
          <div className="blog-hero-top">
            <div className="blog-hero-left">
              {/* Badge */}
              <div className="blog-badge">
                <div className="badge-gradient-square"></div>
                <span className="badge-text">Insights & News</span>
              </div>
              {/* Title */}
              <h1 className="blog-hero-title">
                Sourcing tips, market updates, and <span className="text-orange">industry</span> news
              </h1>
            </div>
            
            <div className="blog-hero-right">
              <a href="/contact" className="blog-hero-btn">
                <span className="btn-text">Get Sourcing Advisory</span>
                <span className="btn-icon-box">
                  <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>

          {/* 2. BLOG GRID */}
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card-item">
                <div className="blog-card-image-box">
                  <img src={post.image} alt={post.title} className="blog-card-photo" />
                  <span className="blog-card-category">{post.category}</span>
                </div>
                
                <div className="blog-card-info">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span className="meta-dot"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  
                  <div className="blog-card-footer">
                    <a href="#read" className="blog-read-more">
                      Read Article
                      <img src="/assets/about-arrow-orange.svg" alt="Arrow" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 3. NEWSLETTER BANNER */}
          <div className="blog-newsletter-banner-wrapper">
            <div className="blog-newsletter-banner" style={{ backgroundImage: 'url("/assets/products-cta-bg.png")' }}>
              <div className="blog-newsletter-content">
                <h2>Stay connected</h2>
                <p>
                  Get sourcing tips, market updates, and project highlights from the global steel supply chain delivered straight to your inbox.
                </p>
              </div>
              
              <div className="blog-newsletter-action">
                <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" required className="blog-email-input" />
                  <button type="submit" className="blog-btn-submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Background Grid Lines & Noise */}
        <div className="blog-bg-overlay">
          <div className="blog-bg-grid">
            <div className="blog-bg-grid-lines">
              <div className="blog-grid-line"></div>
              <div className="blog-grid-line"></div>
              <div className="blog-grid-line"></div>
              <div className="blog-grid-line hidden-tablet"></div>
              <div className="blog-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="blog-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
