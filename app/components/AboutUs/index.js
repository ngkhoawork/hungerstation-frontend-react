import React from 'react';
import HowItWorksSection from 'pages/HomePage/BottomSection/HowItWorksSection';
import AboutSection from './AboutSection';
import WhyUseSection from './WhyUseSection';

const AboutUsPage = () => (
  <div>
    <AboutSection />
    <WhyUseSection />
    <div style={{ marginBottom: '7%' }}>
      <HowItWorksSection />
    </div>
  </div>
);

export default AboutUsPage;
