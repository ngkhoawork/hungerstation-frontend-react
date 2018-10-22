import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { jade, lightGray, fuscousGray } from 'utils/css/colors';
import { flex } from 'utils/css/styles';
import messages from './messages';

const Wrapper = styled.div`
  ${flex({ justify: 'space-between' })};
  padding-bottom: 20px;
  margin: 20px 0;
  color: ${fuscousGray};
  font-size: ${({ isTotal }) => (isTotal ? '20px' : '18px')};
  line-height: 1;
  border-bottom: ${({ isTotal }) =>
    isTotal ? 'none' : `solid 1px ${lightGray}`};
`;

const Quantity = styled.span`
  ${({ isTotal }) => isTotal && `color: ${jade};`};
`;

const Amount = ({ amount = 0, isTotal = false }) => (
  <Fragment>
    <Wrapper isTotal={isTotal}>
      <span>
        {isTotal
          ? intl.formatMessage(messages.totalAmount)
          : intl.formatMessage(messages.amount)}
      </span>
      <Quantity isTotal={isTotal}>
        {intl.formatNumber(amount, { style: 'currency', currency: 'SAR' })}
      </Quantity>
    </Wrapper>
  </Fragment>
);

Amount.propTypes = {
  amount: PropTypes.number,
  isTotal: PropTypes.bool,
};

export default Amount;
