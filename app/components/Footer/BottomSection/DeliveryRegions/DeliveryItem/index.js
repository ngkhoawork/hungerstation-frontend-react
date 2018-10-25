import React from 'react';
import PropTypes from 'prop-types';

import StyledItem from './StyledItem';
import Title from './Title';
import Region from './Region';

const DeliveryItem = ({ name, onClick }) => (
  <StyledItem onClick={onClick}>
    <Title>
      <Region>{name}</Region>
    </Title>
  </StyledItem>
);

DeliveryItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeliveryItem;
