import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { borderRadius } from 'utils/css/variables';
import { persimmon } from 'utils/css/colors';
import { flex } from 'utils/css/styles';
import Icon from 'components/Icon';
import messages from './messages';

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

const MinOrderErrBox = ({ restaurantName, minAmount, currentAmount }) =>
  currentAmount < minAmount ? (
    <Wrapper>
      <Icon name="info-red" size={16} />
      <TextBox>
        {intl.formatMessage(messages.minOrderError, {
          restaurantName,
          minAmount,
          currentAmount,
        })}
      </TextBox>
    </Wrapper>
  ) : null;

MinOrderErrBox.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  minAmount: PropTypes.number.isRequired,
  currentAmount: PropTypes.number.isRequired,
};

export default MinOrderErrBox;
