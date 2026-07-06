import React, { useState } from 'react';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', inquiry: '', message: '' });
      }, 3000);
    }
  };

  const services = [
    {
      title: "Product assembly",
      description: "Complete assembly services with quality testing and packaging.",
      image: "/assets/service-1.webp",
      link: "./service/product-assembly"
    },
    {
      title: "Sheet metal fabrication",
      description: "Complete sheet metal solutions from cutting to finishing.",
      image: "/assets/service-2.webp",
      link: "./service/sheet-metal-fabrication"
    },
    {
      title: "CNC machining services",
      description: "CNC machining with 5-axis technology for complex parts.",
      image: "/assets/service-3.webp",
      link: "./service/cnc-machining-services"
    },
    {
      title: "Injection molding",
      description: "High-volume plastic injection molding with state-of-the-art equipment.",
      image: "/assets/service-4.webp",
      link: "./service/injection-molding"
    },
    {
      title: "Surface finishing",
      description: "Surface treatment finishing services for durability, aesthetics, performance.",
      image: "/assets/service-5.webp",
      link: "./service/surface-finishing"
    },
    {
      title: "Quality control & testing",
      description: "Rigorous inspection for consistent component quality.",
      image: "/assets/service-6.webp",
      link: "./service/quality-control-testing"
    }
  ];

  const faqItems = [
    {
      question: "What manufacturing services do you provide?",
      answer: "We provide end-to-end manufacturing solutions, including component sourcing, product assembly, quality inspection, and final packaging."
    },
    {
      question: "What types of products can you manufacture?",
      answer: "We manufacture a wide range of products including sheet metal components, CNC machined parts, plastic injection molded components, and fully assembled beauty devices."
    },
    {
      question: "How do you maintain quality throughout production?",
      answer: "We implement rigorous quality inspection protocols, raw material analysis, in-line testing, and final quality control checks to meet FDA, CE, and ISO standards."
    },
    {
      question: "Can you manage low and high-volume production?",
      answer: "Yes, we support flexible production options. We handle low-volume prototype builds and high-volume mass manufacturing runs with equal attention to detail."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various sectors including industrial engineering, commercial manufacturing, medical components, and advanced electronic beauty equipment."
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-page-title">
            <h1>Our services</h1>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION (Includes CTA banner below services list) */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <div className="services-cards-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-item">
                <a href={service.link} className="service-card-link">
                  {/* Hover icon pill */}
                  <div className="service-card-hover-icon">
                    <div className="hover-icon-wrapper">
                      <img src="/assets/service-arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                  
                  {/* Card Image */}
                  <div className="service-card-image-box">
                    <img src={service.image} alt={service.title} className="service-card-photo" />
                  </div>
                  
                  {/* Card Info */}
                  <div className="service-card-info">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* CTA Banner right below services grid */}
          <div className="services-page-cta">
            <div className="services-cta-banner">
              <div className="cta-banner-bg" style={{ backgroundImage: 'url("/assets/services-cta-bg.png")' }}></div>
              <div className="cta-banner-content">
                <h2>Ready to start your next project?</h2>
                <div className="cta-banner-button-wrap">
                  <a href="/contact" className="btn-cta-schedule">
                    <span className="btn-cta-text">Schedule now</span>
                    <span className="btn-cta-icon-box">
                      <img src="/assets/services-btn-icon.svg" alt="Arrow icon" className="btn-cta-icon-img" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="services-bg-overlay">
          <div className="services-bg-grid">
            <div className="services-bg-grid-lines">
              <div className="services-grid-line"></div>
              <div className="services-grid-line"></div>
              <div className="services-grid-line"></div>
              <div className="services-grid-line hidden-tablet"></div>
              <div className="services-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="services-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>

      {/* 3. FAQ SECTION (Plain White Background) */}
      <section className="services-faq-section">
        <div className="services-faq-container">
          {/* Header Title Part */}
          <div className="services-faq-header">
            <div className="services-faq-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Common questions</span>
            </div>
            
            <h2 className="services-faq-title">Frequently asked questions</h2>
          </div>
          
          {/* Accordion List */}
          <div className="services-faq-accordion-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="services-faq-accordion-item"
                  data-open={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-item-question-row" tabIndex={0} role="button" aria-expanded={isOpen}>
                    <h3>{item.question}</h3>
                    <div className="faq-item-icon">
                      <div className="faq-icon-line horizontal"></div>
                      <div className="faq-icon-line vertical"></div>
                    </div>
                  </div>
                  
                  <div className="faq-item-answer-row">
                    <div className="faq-item-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA SECTION (Dark factory backdrop form) */}
      <section className="services-contact-section">
        <div className="services-contact-container">
          <div className="services-contact-content">
            {/* Header info */}
            <div className="services-contact-header">
              <div className="services-contact-badge">
                <div className="badge-gradient-square"></div>
                <span className="badge-text">Get in touch</span>
              </div>
              
              <h2 className="services-contact-title">
                Start your <span className="text-orange">precision</span> manufacturing journey
              </h2>
            </div>

            {/* Form */}
            <form className="services-contact-form" onSubmit={handleSubmit}>
              {isSubmitted ? (
                <div className="form-success-message">
                  <h3>Thank you!</h3>
                  <p>Your details have been submitted successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="form-fields-grid">
                    {/* Name input */}
                    <label className="form-field-label name-field">
                      <span className="field-title">Name*</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="text" 
                          required 
                          name="name" 
                          placeholder="Enter your name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Email input */}
                    <label className="form-field-label email-field">
                      <span className="field-title">Email*</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="email" 
                          required 
                          name="email" 
                          placeholder="Enter your email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Inquiry input */}
                    <label className="form-field-label inquiry-field">
                      <span className="field-title">Inquiry</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="text" 
                          name="inquiry" 
                          placeholder="Enter inquiry details" 
                          value={formData.inquiry}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Message input */}
                    <label className="form-field-label message-field">
                      <span className="field-title">Message</span>
                      <div className="field-input-wrapper">
                        <textarea 
                          name="message" 
                          placeholder="Tell us about your project" 
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-textarea-input"
                        ></textarea>
                      </div>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-wrapper">
                    <button 
                      type="submit" 
                      className={`btn-form-submit ${isFormValid ? 'active' : 'disabled'}`}
                      disabled={!isFormValid}
                    >
                      <span className="submit-btn-text">Send your details</span>
                    </button>
                  </div>

                  {/* Anti-spam hidden inputs */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} readOnly />
                  <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} readOnly />
                </>
              )}
            </form>
          </div>
        </div>

        {/* Backdrop images */}
        <div className="services-contact-bg-wrapper">
          <img src="/assets/services-contact-bg.webp" alt="Factory Backdrop" className="services-contact-bg-img" />
          <div className="services-contact-bg-overlay"></div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
