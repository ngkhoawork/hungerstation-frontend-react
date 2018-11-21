import React from 'react';

import AboutSection from './AboutSection';
import WhyUseSection from './WhyUseSection';
import HowItWorksSection from '../../pages/HomePage/BottomSection/HowItWorksSection';

const AboutUsPage = () => (
  <div>
    <AboutSection />
    <WhyUseSection />
    <div style={{ marginTop: '5%', marginBottom: '7%' }}>
      <HowItWorksSection />
    </div>
  </div>
);

export default AboutUsPage;
