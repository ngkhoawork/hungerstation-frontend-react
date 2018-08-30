import React from 'react';

import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';

const DeliveryRegions = () => {
  const deliveries = [
    {
      id: 1,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 2,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 3,
      title: 'Food delivery in',
      region: 'Doha',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 4,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 5,
      title: 'Food delivery in',
      region: 'Doha',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 6,
      title: 'Food delivery in',
      region: 'Doha',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 7,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 8,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 9,
      title: 'Food delivery in',
      region: 'Dubai',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
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
