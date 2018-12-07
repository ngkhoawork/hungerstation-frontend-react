import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';

import StyledItem from './StyledItem';
import Title from './Title';
import DeliveryCity from './DeliveryCity';
import Region from './Region';
import messages from './messages';

const DeliveryItem = ({ name, onClick }) => (
  <StyledItem onClick={onClick}>
    <Title>
      <DeliveryCity>{intl.formatMessage(messages.foodDelivery)} </DeliveryCity>
      <Region>{name}</Region>
    </Title>
  </StyledItem>
);

DeliveryItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeliveryItem;
