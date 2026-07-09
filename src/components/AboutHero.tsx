import React, { useState, useRef } from 'react';
import './AboutHero.css';
import AnimatedNumber from './AnimatedNumber';

const AboutHero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const teamMembers = [
    { name: "James Anderson", role: "Head of Sourcing", image: "/assets/about-team-member-1.webp" },
    { name: "Michael Turner", role: "Chief Logistics Officer", image: "/assets/about-team-member-2.webp" },
    { name: "Olivia Bennett", role: "Quality Assurance Director", image: "/assets/about-team-member-3.webp" },
    { name: "William Harris", role: "Sourcing Advisor", image: "/assets/about-team-member-4.webp" },
    { name: "Sophie Walker", role: "Client Relations Director", image: "/assets/about-team-member-5.webp" },
    { name: "William Carter", role: "Compliance Manager", image: "/assets/about-team-member-6.webp" },
    { name: "Emily Carter", role: "Trade Finance Expert", image: "/assets/about-team-member-7.webp" }
  ];

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="about-hero-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          
          {/* Header Pill & Title */}
          <div className="about-hero-header">
            <div className="about-hero-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Who we are</span>
            </div>
            <h1 className="about-hero-title">About us</h1>
          </div>
          
          {/* Content Area with Avatar stack and coordinates */}
          <div className="about-hero-content">
            <div className="about-hero-left">
              <div className="about-hero-avatars">
                <div className="avatar-wrapper"><img src="/assets/about-avatar-1.png" alt="Team Avatar 1" /></div>
                <div className="avatar-wrapper"><img src="/assets/about-avatar-2.png" alt="Team Avatar 2" /></div>
                <div className="avatar-wrapper"><img src="/assets/about-avatar-3.png" alt="Team Avatar 3" /></div>
                <div className="avatar-wrapper"><img src="/assets/about-avatar-4.png" alt="Team Avatar 4" /></div>
                <div className="avatar-counter-badge">25+</div>
              </div>
              <p className="about-hero-desc">Team of dedicated procurement, engineering, and logistics professionals</p>
            </div>
            
            <div className="about-hero-coords">
              37.7749° N, 122.4194° W
            </div>
          </div>
          
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="about-hero-bg-overlay">
          <div className="bg-divider-grid">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line hidden-tablet"></div>
            <div className="divider-line hidden-mobile"></div>
          </div>
          <div className="bg-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>

        {/* Background Shadow Glow */}
        <div className="about-hero-glow-shadow">
          <img src="/assets/about-shadow.png" alt="Shadow glow effect" />
        </div>
      </section>

      {/* 2. ABOUT IMAGE & INFO SECTION */}
      <section className="about-image-section">
        <div className="about-image-grid">
          
          {/* Left Column: Image */}
          <div className="about-img-left">
            <img src="/assets/about-building.png" alt="Precision structural steel storage warehouse" />
          </div>
          
          {/* Right Column: Info text, Button, Brochure */}
          <div className="about-info-right">
            <div className="about-info-content">
              <p className="about-info-desc">
                We connect contractors and fabricators to a vetted network of mills, ports, fabricators, and freight partners spanning every major steel-producing region. Whether it's a single joist order or a full structural package for a large-scale build, we manage sourcing, certification, fabrication coordination, and logistics as one accountable process.
              </p>
              
              <div className="about-info-buttons">
                {/* Custom sliding button */}
                <a className="btn-meet-team" href="#team">
                  <div className="btn-meet-text-container">
                    <span className="btn-meet-text text-primary">Meet our team</span>
                    <span className="btn-meet-text text-hover">Meet our team</span>
                  </div>
                  <div className="btn-meet-icon-container">
                    <div className="btn-meet-icon-wrap">
                      <img src="/assets/about-btn-icon.svg" alt="Arrow icon" className="icon-primary" />
                      <img src="/assets/about-btn-icon.svg" alt="Arrow icon" className="icon-hover" />
                    </div>
                  </div>
                </a>
                
                {/* Download Brochure Link */}
                <a 
                  className="btn-download-brochure" 
                  href="/assets/about-brochure.pdf" 
                  download="brochure.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Download brochure
                  <img src="/assets/about-download-icon.svg" alt="Download Brochure Icon" className="download-arrow-icon" />
                </a>
              </div>
            </div>

            {/* Sliding Infinite Text Ticker */}
            <div className="about-ticker-container">
              <div className="about-ticker-marquee">
                <div className="ticker-track">
                  <h2>2005 SINCE - 2005 SINCE - 2005 SINCE - 2005 SINCE - </h2>
                  <h2>2005 SINCE - 2005 SINCE - 2005 SINCE - 2005 SINCE - </h2>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* 3. JOURNEY SECTION */}
      <section className="about-journey-section">
        <div className="about-journey-container">
          
          <div className="about-journey-header">
            <div className="about-journey-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Our journey</span>
            </div>
            
            <h2 className="about-journey-title">
              Driven by standards, backed by a <span className="text-orange">global network</span>, focused on certified delivery
            </h2>
          </div>
          
          <div className="about-journey-content">
            {/* Left Column: Founder Card */}
            <div className="about-founder-card">
              <div className="founder-overlay"></div>
              <img src="/assets/about-founder.png" alt="Josef Unger Senior, Founder of Unger Steel Group" className="founder-img" />
              <div className="founder-info">
                <h3>Josef Unger Senior</h3>
                <p>Founder, Unger Steel Group (Austria)</p>
              </div>
            </div>
            
            {/* Right Columns: Story & Capabilities */}
            <div className="about-journey-info">
              
              {/* Story Narrative */}
              <div className="about-story-col">
                <h4>Our story</h4>
                <div className="story-paragraphs">
                  <p>
                    We connect contractors and fabricators to a vetted network of mills, ports, fabricators, and freight partners spanning every major steel-producing region. Whether it's a single joist order or a full structural package for a large-scale build, we manage sourcing, certification, fabrication coordination, and logistics as one accountable process.
                  </p>
                  <p>
                    Our commitment is to simplify the supply chain. By managing the complexities of grade matching, standard certifications, customs clearance, and just-in-time delivery scheduling, we provide our clients with the material certainty they need to execute their projects on time and on budget.
                  </p>
                </div>
              </div>
              
              {/* Capabilities Menu */}
              <div className="about-caps-col">
                <h5>Our capabilities</h5>
                
                <div className="caps-list">
                  <a href="/services" className="cap-list-item" onClick={(e) => navigateTo(e, '/services')}>
                    <span>Structural Steel & Sourcing</span>
                    <div className="cap-arrow-wrap">
                      <img src="/assets/about-arrow-orange.svg" alt="Arrow" />
                    </div>
                  </a>
                  <a href="/services" className="cap-list-item" onClick={(e) => navigateTo(e, '/services')}>
                    <span>Engineering Advisory</span>
                    <div className="cap-arrow-wrap">
                      <img src="/assets/about-arrow-orange.svg" alt="Arrow" />
                    </div>
                  </a>
                  <a href="/services" className="cap-list-item" onClick={(e) => navigateTo(e, '/services')}>
                    <span>Quality Assurance & MTCs</span>
                    <div className="cap-arrow-wrap">
                      <img src="/assets/about-arrow-orange.svg" alt="Arrow" />
                    </div>
                  </a>
                  <a href="/services" className="cap-list-item" onClick={(e) => navigateTo(e, '/services')}>
                    <span>Global Logistics & Freight</span>
                    <div className="cap-arrow-wrap">
                      <img src="/assets/about-arrow-orange.svg" alt="Arrow" />
                    </div>
                  </a>
                </div>
                
                {/* View capabilities button */}
                <div className="caps-cta-btn">
                  <a className="btn-meet-team" href="/services" onClick={(e) => navigateTo(e, '/services')}>
                    <div className="btn-meet-text-container">
                      <span className="btn-meet-text text-primary">View all capabilities</span>
                      <span className="btn-meet-text text-hover">View all capabilities</span>
                    </div>
                    <div className="btn-meet-icon-container">
                      <div className="btn-meet-icon-wrap">
                        <img src="/assets/about-btn-icon.svg" alt="Arrow icon" className="icon-primary" />
                        <img src="/assets/about-btn-icon.svg" alt="Arrow icon" className="icon-hover" />
                      </div>
                    </div>
                  </a>
                </div>
                
              </div>
              
            </div>
          </div>
          
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="about-hero-bg-overlay">
          <div className="bg-divider-grid">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line hidden-tablet"></div>
            <div className="divider-line hidden-mobile"></div>
          </div>
          <div className="bg-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>

      {/* 4. CLIENT & AWARDS SECTION */}
      <section className="about-client-section">
        <div className="about-client-container">
          
          {/* Top Title */}
          <div className="about-client-top">
            <div className="about-client-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Our clients</span>
            </div>
            
            <h2 className="about-client-title">
              Trusted by <span className="text-orange">industry</span> leaders
            </h2>
          </div>
          
          {/* Center client logos grid */}
          <div className="about-client-logos">
            <div className="client-logo-box"><img src="/assets/about-client-1.svg" alt="Swiss Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-2.svg" alt="Alaska Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-3.svg" alt="Berlin Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-4.svg" alt="Cairo Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-5.svg" alt="Thera Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-6.svg" alt="Kobe Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-7.svg" alt="On_Event Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-8.svg" alt="Oslo Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-9.svg" alt="U-Turn Client Logo" /></div>
            <div className="client-logo-box"><img src="/assets/about-client-10.svg" alt="Imprintify Client Logo" /></div>
          </div>
          
          {/* Divider */}
          <div className="about-client-divider"></div>
          
          {/* Bottom awards section */}
          <div className="about-client-awards-section">
            <h3 className="about-client-awards-title">
              <span className="text-orange">20 Years</span> of procurement excellence &amp; recognition
            </h3>
            
            <div className="about-client-awards">
              <div className="award-badge-box style-1"><img src="/assets/about-award-1.svg" alt="Product of the Year award" /></div>
              <div className="award-badge-box style-2"><img src="/assets/about-award-2.svg" alt="ISO 9001 quality certificate badge" /></div>
              <div className="award-badge-box style-3"><img src="/assets/about-award-3.svg" alt="Quality certificate badge" /></div>
              <div className="award-badge-box style-4"><img src="/assets/about-award-4.svg" alt="Quality safe check badge" /></div>
            </div>
          </div>
          
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="about-hero-bg-overlay">
          <div className="bg-divider-grid">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line hidden-tablet"></div>
            <div className="divider-line hidden-mobile"></div>
          </div>
          <div className="bg-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>

      {/* 5. VIDEO SECTION */}
      <section className="about-video-section">
        <div className="about-video-container">
          <div className="about-video-content">
            <div className="about-video-text-top">
              <div className="vertical-orange-bar"></div>
              <h2>Sourced anywhere. Certified everywhere. Delivered on schedule.</h2>
            </div>
            
            <div className="about-video-text-bottom">
              <div className="video-counter-wrap">
                <AnimatedNumber value={250000} />+
              </div>
              <p>Metric tons of certified material procured</p>
            </div>
          </div>
        </div>

        {/* Video element backdrop wrapper */}
        <div className="about-video-wrapper">
          <div className="about-video-color-overlay"></div>
          <video 
            ref={videoRef}
            src="/assets/about-video.mp4" 
            loop 
            muted 
            autoPlay 
            playsInline 
            poster="/assets/about-video-poster.jpg"
            className="video-backdrop"
          />
          
          {/* Floating play/pause controller */}
          <button className="btn-video-play-pause" onClick={toggleVideoPlayback} aria-label="Toggle video playback">
            {isVideoPlaying ? (
              <img src="/assets/about-pause-icon.svg" alt="Pause" className="btn-video-icon-img" />
            ) : (
              <span className="btn-video-play-icon">▶</span>
            )}
          </button>
          
          {/* Backdrop Shadow Glow */}
          <div className="about-video-glow-shadow"></div>
        </div>
      </section>

      {/* 6. TEAM SHOWCASE SECTION */}
      <section className="about-team-section" id="team">
        <div className="about-team-container">
          
          <div className="about-team-header">
            <div className="about-team-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Meet our experts</span>
            </div>
            
            <h2 className="about-team-title">
              Leaders in <span className="text-orange">procurement</span> &amp; logistics
            </h2>
          </div>

          <div className="about-team-grid">
            {/* Left Column: Hero Image */}
            <div className="about-team-left-col">
              <div className="about-team-img">
                <img 
                  src={teamMembers[activeTeamIndex]?.image} 
                  alt={teamMembers[activeTeamIndex]?.name} 
                  key={activeTeamIndex}
                  className="team-active-photo"
                />
              </div>
            </div>
            
            {/* Right Column: Interactive experts list */}
            <div className="about-team-right-col">
              <div className="about-team-members-list">
                {teamMembers.map((member, index) => {
                  const isActive = activeTeamIndex === index;
                  return (
                    <div 
                      key={index}
                      className="about-team-member-row"
                      data-active={isActive}
                      onMouseEnter={() => setActiveTeamIndex(index)}
                      tabIndex={0}
                      onFocus={() => setActiveTeamIndex(index)}
                    >
                      <h3 className="team-member-name">{member.name}</h3>
                      <span className="team-member-role">{member.role}</span>
                      
                      {/* Social icons visible when row is active */}
                      <div className="team-row-socials">
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                          <img src="/assets/about-social-x.svg" alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                          <img src="/assets/about-social-instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                          <img src="/assets/about-social-linkedin.svg" alt="LinkedIn" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="about-hero-bg-overlay">
          <div className="bg-divider-grid">
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line"></div>
            <div className="divider-line hidden-tablet"></div>
            <div className="divider-line hidden-mobile"></div>
          </div>
          <div className="bg-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
