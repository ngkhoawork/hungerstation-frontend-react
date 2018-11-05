import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { jade, lightGray, fuscousGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';
import { flex } from 'utils/css/styles';

const Wrapper = styled.div`
  ${flex({ justify: 'space-between' })};
  padding-bottom: 20px;
  margin: 20px 0;
  color: ${fuscousGray};
  font-size: ${({ isTotal }) => (isTotal ? '20px' : '18px')};
  font-family: ${fontFamilyRegular};
  line-height: 1;
  border-bottom: ${({ isTotal }) =>
    isTotal ? 'none' : `solid 1px ${lightGray}`};
`;

const Quantity = styled.span`
  ${({ isTotal }) => isTotal && `color: ${jade};`};
`;

const Amount = ({ label, amount = 0, isTotal = false }) => (
  <Fragment>
    <Wrapper isTotal={isTotal}>
      <span>{label}</span>
      <Quantity isTotal={isTotal}>
        {intl.formatNumber(amount, {
          style: 'currency',
          currency: 'SAR',
          minimumFractionDigits: 0,
        })}
      </Quantity>
    </Wrapper>
  </Fragment>
);

Amount.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number,
  isTotal: PropTypes.bool,
};

export default Amount;
