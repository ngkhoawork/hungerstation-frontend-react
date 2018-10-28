import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gold, lightGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import CircledItem from 'components/CircledItem';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: ${fontFamilyRegular};
  line-height: 1;
  font-size: 18px;
`;

const Quantity = styled.span`
  margin: 0 10px;
`;

const QuantitySelect = ({ quantity, onChange }) => (
  <Container>
    <CircledItem
      color={lightGray}
      width={24}
      onClick={() => onChange(quantity - 1)}
    >
      <span style={{ zIndex: 1 }}>-</span>
    </CircledItem>
    <Quantity>{quantity}</Quantity>
    <CircledItem color={gold} width={24} onClick={() => onChange(quantity + 1)}>
      <span style={{ zIndex: 1 }}>+</span>
    </CircledItem>
  </Container>
);

QuantitySelect.propTypes = {
  quantity: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default QuantitySelect;
