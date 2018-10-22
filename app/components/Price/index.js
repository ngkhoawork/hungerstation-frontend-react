import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import { fontFamilyRegular } from 'utils/css/variables';
import { jade, silverChalice } from 'utils/css/colors';

const Price = styled.div`
  color: ${({ isPrimary }) => (isPrimary ? jade : silverChalice)};
  font-size: ${({ size }) => size || 16}px;
  font-family: ${fontFamilyRegular};
`;

const OrderElement = ({ price, hasTag, ...props }) => (
  <Price {...props}>
    {hasTag ? (
      <Fragment>
        <Icon name="price-tag" /> &nbsp;
      </Fragment>
    ) : null}
    {intl.formatNumber(price, { style: 'currency', currency: 'SAR' })}
  </Price>
);

OrderElement.propTypes = {
  price: PropTypes.number.isRequired,
  size: PropTypes.number,
  isPrimary: PropTypes.bool,
  hasTag: PropTypes.bool,
};

export default OrderElement;
