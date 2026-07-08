import React, { useState } from 'react';
import './ContactPage.css';

const clientLogos = [
  "/assets/about-client-1.svg",
  "/assets/about-client-2.svg",
  "/assets/about-client-3.svg",
  "/assets/about-client-4.svg",
  "/assets/about-client-5.svg",
  "/assets/about-client-6.svg",
  "/assets/about-client-7.svg",
  "/assets/about-client-8.svg",
  "/assets/about-client-9.svg",
  "/assets/about-client-10.svg"
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.phone.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Contact Content Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-hero-flex">
            {/* Left Column (Info) */}
            <div className="contact-info-col">
              <div className="contact-info-top">
                <h1 className="contact-hero-title">
                  Let’s <span className="text-orange">work</span> together
                </h1>
                <p className="contact-hero-desc">
                  Got questions or need assistance with your steel procurement? Reach out to us anytime — our team is ready to provide the support and guidance you need.
                </p>
                <div className="contact-hero-action-btn">
                  <a href="/assets/about-brochure.pdf" download className="contact-btn-brochure">
                    <span className="btn-text">Download Brochure</span>
                    <span className="btn-icon-box">
                      <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Grid details (Contact Info & Locations) */}
              <div className="contact-details-grid">
                {/* Contact numbers/emails */}
                <div className="contact-detail-col">
                  <h4 className="detail-title">// Contact us on //</h4>
                  <div className="detail-links">
                    <a href="tel:+14155550167">+1 (415) 555-0167</a>
                    <a href="mailto:procure@50stars.com">procure@50stars.com</a>
                  </div>
                </div>

                {/* Locations */}
                <div className="contact-detail-col">
                  <h4 className="detail-title">// Find us //</h4>
                  <div className="detail-links">
                    <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                      USA - 1238 Echo Ridge Blvd, Suite 400, San Francisco, CA 94103
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form Panel) */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <form className="contact-form-body" onSubmit={handleSubmit}>
                  {isSubmitted ? (
                    <div className="contact-form-success">
                      <h3>Thank you!</h3>
                      <p>Your details have been submitted successfully. We will get back to you shortly.</p>
                    </div>
                  ) : (
                    <>
                      <div className="contact-form-grid">
                        {/* First Name */}
                        <label className="contact-form-field">
                          <span className="field-label">First name*</span>
                          <input 
                            type="text" 
                            required 
                            name="firstName" 
                            placeholder="Enter your first name" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="contact-text-input" 
                          />
                        </label>

                        {/* Last Name */}
                        <label className="contact-form-field">
                          <span className="field-label">Last name*</span>
                          <input 
                            type="text" 
                            required 
                            name="lastName" 
                            placeholder="Enter your last name" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="contact-text-input" 
                          />
                        </label>

                        {/* Email */}
                        <label className="contact-form-field">
                          <span className="field-label">Email*</span>
                          <input 
                            type="email" 
                            required 
                            name="email" 
                            placeholder="Enter your email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            className="contact-text-input" 
                          />
                        </label>

                        {/* Phone */}
                        <label className="contact-form-field">
                          <span className="field-label">Phone*</span>
                          <input 
                            type="tel" 
                            required 
                            name="phone" 
                            placeholder="Enter your contact number" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="contact-text-input" 
                          />
                        </label>

                        {/* Subject */}
                        <label className="contact-form-field col-span-2">
                          <span className="field-label">Subject</span>
                          <input 
                            type="text" 
                            name="subject" 
                            placeholder="Enter topic or subject" 
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="contact-text-input" 
                          />
                        </label>

                        {/* Message */}
                        <label className="contact-form-field col-span-2">
                          <span className="field-label">Message</span>
                          <textarea 
                            name="message" 
                            placeholder="Tell us about your project" 
                            value={formData.message}
                            onChange={handleInputChange}
                            className="contact-textarea-input"
                          ></textarea>
                        </label>
                      </div>

                      {/* Submit button */}
                      <div className="contact-form-submit">
                        <button 
                          type="submit" 
                          className={`btn-contact-submit ${isFormValid ? 'active' : 'disabled'}`}
                          disabled={!isFormValid}
                        >
                          Submit details
                        </button>
                      </div>
                    </>
                  )}
                </form>

                {/* Form Shadow Background Accent */}
                <div className="form-card-shadow-bg">
                  <img src="/assets/case-shadow.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Ticker */}
          <div className="contact-ticker-section">
            <div className="contact-ticker-wrapper">
              <div className="contact-ticker-track">
                {/* Loop 1 */}
                {clientLogos.map((logo, idx) => (
                  <div key={`logo-1-${idx}`} className="contact-ticker-item">
                    <img src={logo} alt="Client Logo" />
                  </div>
                ))}
                {/* Loop 2 (Infinite marquee backup) */}
                {clientLogos.map((logo, idx) => (
                  <div key={`logo-2-${idx}`} className="contact-ticker-item">
                    <img src={logo} alt="Client Logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Background Grid Lines & Noise */}
        <div className="contact-bg-overlay">
          <div className="contact-bg-grid">
            <div className="contact-bg-grid-lines">
              <div className="contact-grid-line"></div>
              <div className="contact-grid-line"></div>
              <div className="contact-grid-line"></div>
              <div className="contact-grid-line hidden-tablet"></div>
              <div className="contact-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="contact-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
