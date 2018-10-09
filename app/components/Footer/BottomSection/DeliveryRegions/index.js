import React from 'react';
import intl from 'utils/intlService';
import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';

import messages from './messages';

const DeliveryRegions = () => {
  const deliveries = [
    {
      id: 1,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.dubai),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 2,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.dubai),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 3,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.doha),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 4,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.doha),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 5,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.dubai),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 6,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.doha),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 7,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.dubai),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 8,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.dubai),
      description: intl.formatMessage(messages.description),
    },
    {
      id: 9,
      title: intl.formatMessage(messages.title),
      region: intl.formatMessage(messages.doha),
      description: intl.formatMessage(messages.description),
    },
  ];
  return (
    <StyledContainer>
      {deliveries.map(delivery => (
        <DeliveryItem key={delivery.id} {...delivery} />
      ))}
    </StyledContainer>
  );
};

export default DeliveryRegions;
