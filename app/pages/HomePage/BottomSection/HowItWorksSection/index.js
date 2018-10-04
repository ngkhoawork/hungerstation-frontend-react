import React from 'react';
import StyledFeatures from './StyledFeatures';
import Feature from './Feature';

const HowItWorksSection = () => {
  const features = [
    {
      id: 'location',
      label: 'Select location',
      message: 'No need for looking for restaurants numbers anymore',
    },
    {
      id: 'chef',
      label: 'Choose restaurant',
      message: 'No need for looking for restaurants numbers anymore',
    },
    {
      id: 'payment',
      label: 'Pay and wait',
      message: 'No need for looking for restaurants numbers anymore',
    },
  ];
  return (
    <StyledFeatures>
      {features.map(feature => <Feature key={feature.id} {...feature} />)}
    </StyledFeatures>
  );
};

export default HowItWorksSection;
