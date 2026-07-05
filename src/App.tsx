import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import IndustrySection from './components/IndustrySection';
import CaseStudySection from './components/CaseStudySection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialSection from './components/TestimonialSection';
import FooterSection from './components/FooterSection';

function App() {
  useEffect(() => {
    const selectors = [
      '.hero-content',
      '.founder-card', '.quote-container',
      '.about-title', '.about-description', '.about-card',
      '.services-title', '.service-row', '.services-cta',
      '.ps-counter', '.ps-subtitle', '.ps-diagram-container', '.ps-card',
      '.is-title', '.is-desc', '.is-tab-btn', '.is-panel',
      '.cs-title', '.cs-slide',
      '.wc-title', '.wc-features li', '.wc-btn', '.wc-banner',
      '.tm-title', '.tm-card', '.tm-col-2',
      '.ft-col', '.ft-bottom'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        observer.observe(el);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      <div id="scroll-progress" className="scroll-progress-bar"></div>
      <Navbar />
      <Hero />
      <div className="main-content-wrapper">
        <VideoSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <IndustrySection />
        <CaseStudySection />
        <WhyChooseSection />
        <TestimonialSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
