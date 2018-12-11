import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { gold } from 'utils/css/colors';
import { sideMargin, mediaMedium, mediaSmall } from 'utils/css/styles';
import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';

const circledItemCss = css`
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  border-radius: 50%;
  background: ${gold};
  flex-shrink: 0;
  flex-grow: 0;
  ${sideMargin('start', '30px')};

  ${mediaMedium`${sideMargin('start', '20px')}`};
  ${mediaSmall`${sideMargin('start', '5px')}`};
`;

const BasketIcon = ({ isRaised, ...props }) => (
  <CircledItem
    inline
    width={34}
    withShadow={isRaised}
    css={circledItemCss}
    {...props}
  >
    <Icon name="bag-dark" size={16} />
  </CircledItem>
);

BasketIcon.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default BasketIcon;
