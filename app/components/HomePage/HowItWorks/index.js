import React from 'react';
import StyledFeatures from './StyledFeatures';
import Feature from './Feature';

const HowItWorks = () => {
  const features = [
    {
      id: 'location',
      label: 'Select location',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 'restaurant',
      label: 'Choose restaurant',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 'pay',
      label: 'Pay and wait',
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ];
  return (
    <StyledFeatures>
      {features.map(feature => <Feature key={feature.id} {...feature} />)}
    </StyledFeatures>
  );
};

export default HowItWorks;
