import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontFamilyRegular } from 'utils/css/variables';
import Icon from 'components/Icon';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: ${fontFamilyRegular};
  line-height: 1;
  font-size: 20px;
`;

const Quantity = styled.span`
  margin: 0 5px;
  min-width: 20px;
  text-align: center;
`;

const QuantitySelect = ({ quantity, onChange }) => (
  <Container>
    <Icon
      name={`minus${quantity > 1 ? '-gold' : ''}`}
      onClick={() => onChange(quantity - 1)}
    />
    <Quantity>{quantity}</Quantity>
    <Icon name="plus" onClick={() => onChange(quantity + 1)} />
  </Container>
);

QuantitySelect.propTypes = {
  quantity: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default QuantitySelect;
