import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';

const DeleteButton = styled.div`
  cursor: pointer;
  margin: -6px 5px 0;
`;

const OrderElementDelete = ({ onRemoveFromCart }) => (
  <DeleteButton role="button" onClick={onRemoveFromCart}>
    <Icon name="trash-red" />
  </DeleteButton>
);

OrderElementDelete.propTypes = {
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default OrderElementDelete;
