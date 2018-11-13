import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'utils/css/variables';
import { jade } from 'utils/css/colors';
import Icon from 'components/Icon';
import { RestaurantProductPropType } from './constants';

const Container = styled.span`
  padding: 1px 6px 1px 7px;
  background: ${jade};
  border-radius: ${borderRadius};
  color: white;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
`;

const BasketQuantity = ({ product: { id, menuitems }, cartItems }) => {
  const quantity = cartItems
    .filter(
      ({ product, parentProduct }) =>
        menuitems
          ? parentProduct && parentProduct.id === id
          : product.id === id,
    )
    .reduce((sum, { quantity }) => sum + quantity, 0);

  if (!quantity) return null;

  return (
    <Container>
      <Icon
        name="basket-white"
        size={16}
        style={{ marginRight: 5, width: 13 }}
      />
      {quantity}x
    </Container>
  );
};

BasketQuantity.propTypes = {
  product: RestaurantProductPropType.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default BasketQuantity;
