import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import { borderRadius, fontFamilyRegular } from 'utils/css/variables';
import { jade, alabaster } from 'utils/css/colors';

const Time = styled.span`
  color: ${jade};
  font-size: ${({ size }) => size || 16}px;
  font-family: ${fontFamilyRegular};
  background-color: ${alabaster};
  padding: 1px 8px 3px 8px;
  border-radius: ${borderRadius};

  ${({ css }) => css};
`;

const DateTimeElement = ({ time, ...props }) => (
  <Time {...props}>
    <Icon name="price-tag" offsetY="1" /> &nbsp;
    {intl.formatTime(time)}
  </Time>
);

DateTimeElement.propTypes = {
  time: PropTypes.number.isRequired,
};

export default DateTimeElement;
