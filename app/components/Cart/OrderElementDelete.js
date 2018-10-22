import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';

const DeleteButton = styled.div`
  cursor: pointer;
  margin: -6px 5px 0;
`;

const OrderElementDelete = ({ id, onRemoveFromCart }) => (
  <DeleteButton role="button" onClick={() => onRemoveFromCart(id)}>
    <Icon name="trash-red" />
  </DeleteButton>
);

OrderElementDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default OrderElementDelete;
