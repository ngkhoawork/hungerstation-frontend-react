import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'utils/css/variables';
import { persimmon } from 'utils/css/colors';
import { flex } from 'utils/css/styles';
import Icon from 'components/Icon';

const Wrapper = styled.section`
  border-radius: ${borderRadius};
  background-color: rgba(252, 146, 135, 0.1);
  padding: 20px;
  margin: 30px 0;
  ${flex({ justify: 'center' })};
`;
const TextBox = styled.div`
  color: ${persimmon};
  font-size: 14px;
  line-height: 1;
  margin-left: 10px;
`;

const MinOrderErrBox = ({
  restaurantName = 'BurgerKing',
  minAmount = 850,
  currentAmount = 800,
}) =>
  currentAmount < minAmount ? (
    <Wrapper>
      <Icon name="info-red" size={16} />
      <TextBox>
        {restaurantName} minimum order amount SR {minAmount}. current order
        total is SR {currentAmount}.
      </TextBox>
    </Wrapper>
  ) : null;

MinOrderErrBox.propTypes = {
  restaurantName: PropTypes.string,
  minAmount: PropTypes.number,
  currentAmount: PropTypes.number,
};

export default MinOrderErrBox;
