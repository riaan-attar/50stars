import React from 'react';
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
  return (
    <div className="page-wrapper">
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
