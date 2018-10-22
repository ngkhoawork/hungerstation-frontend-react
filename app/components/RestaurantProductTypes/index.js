import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { ProductTypeBar, ProductType, Name } from './StyledComponents';

const RestaurantProductTypes = ({ types, active }) => (
  <ProductTypeBar>
    {types.map(type => (
      <ProductType key={type} active={active === type}>
        <Name active={active === type}>{type}</Name>
        {active === type ? <Icon name="check-mark-green" size={18} /> : null}
      </ProductType>
    ))}
  </ProductTypeBar>
);

RestaurantProductTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string,
};

export default RestaurantProductTypes;
