import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl, { priceIntlOptions } from 'utils/intlService';
import Icon from 'components/Icon';
import { fontFamilyRegular } from 'utils/css/variables';
import { jade, silverChalice } from 'utils/css/colors';

const Price = styled.span`
  color: ${({ isPrimary }) => (isPrimary ? jade : silverChalice)};
  font-size: ${({ size }) => size || 16}px;
  font-family: ${fontFamilyRegular};
  white-space: nowrap;

  ${({ css }) => css};
`;

const OrderElement = ({ price, hasTag, currencyStyle, ...props }) => {
  const getStyledPrice = () => {
    const priceString = intl.formatNumber(price, priceIntlOptions);

    if (!currencyStyle || typeof priceString !== 'string') return priceString;

    const priceParts = priceString.replace(/^(\D+)/, '$1 ').split(' ');
    const pt1 = parseFloat(priceParts[0]);
    const pt2 = parseFloat(priceParts[1]);

    if (Number.isNaN(pt1) && typeof pt2 === 'number') {
      return (
        <span>
          <span style={currencyStyle}>{priceParts[0].trim()}</span>
          &nbsp;
          {priceParts[1].trim()}
        </span>
      );
    }

    if (typeof pt1 === 'number' && Number.isNaN(pt2)) {
      return (
        <span>
          {priceParts[0].trim()}
          &nbsp;
          <span style={currencyStyle}>{priceParts[1].trim()}</span>
        </span>
      );
    }

    return priceString;
  };

  return (
    <Price {...props}>
      {hasTag ? (
        <Fragment>
          <Icon name="price-tag" /> &nbsp;
        </Fragment>
      ) : null}
      {getStyledPrice()}
    </Price>
  );
};

OrderElement.propTypes = {
  price: PropTypes.number.isRequired,
  size: PropTypes.number,
  currencyStyle: PropTypes.object,
  isPrimary: PropTypes.bool,
  hasTag: PropTypes.bool,
};

export default OrderElement;
