import React from 'react';
import StyledFeatures from './StyledFeatures';
import Feature from './Feature';

const HowItWorksSection = () => {
  const features = [
    {
      id: 'location',
      label: 'Select location',
      message: 'Lorem Ipsum is simply dummy text of the printing and...',
    },
    {
      id: 'chef',
      label: 'Choose restaurant',
      message: 'Lorem Ipsum is simply dummy text of the printing and...',
    },
    {
      id: 'payment',
      label: 'Pay and wait',
      message: 'Lorem Ipsum is simply dummy text of the printing and...',
    },
  ];
  return (
    <StyledFeatures>
      {features.map(feature => <Feature key={feature.id} {...feature} />)}
    </StyledFeatures>
  );
};

export default HowItWorksSection;
