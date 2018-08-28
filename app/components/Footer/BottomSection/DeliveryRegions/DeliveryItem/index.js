import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Title from './Title';
import Region from './Region';
import Description from './Description';

const DeliveryItem = ({ title, region, description }) => (
  <StyledItem>
    <Title>
      {title}
      <Region>{region}</Region>
    </Title>
    <Description>{description}</Description>
  </StyledItem>
);

DeliveryItem.propTypes = {
  title: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DeliveryItem;
