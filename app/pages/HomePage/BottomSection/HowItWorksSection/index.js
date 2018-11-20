import React from 'react';
import intl from 'utils/intlService';
import StyledFeatures from './StyledFeatures';
import Feature from './Feature';
import messages from './messages';
const HowItWorksSection = () => {
  const features = [
    {
      id: 'location',
      label: intl.formatMessage(messages.locationHeader),
      message: intl.formatMessage(messages.locationDetails),
    },
    {
      id: 'chef',
      label: intl.formatMessage(messages.chooseHeader),
      message: intl.formatMessage(messages.chooseDetails),
    },
    {
      id: 'payment',
      label: intl.formatMessage(messages.paymentHeader),
      message: intl.formatMessage(messages.paymentDetails),
    },
  ];
  return (
    <StyledFeatures>
      {features.map(feature => <Feature key={feature.id} {...feature} />)}
    </StyledFeatures>
  );
};

export default HowItWorksSection;
