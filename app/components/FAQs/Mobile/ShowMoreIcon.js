import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { mediaMedium } from 'utils/css/styles';

export const IconContainer = styled.span`
  position: relative;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  top: ${({ isOpen }) => (isOpen ? -1 : 0)}px;

  ${mediaMedium`
    display: block;
    padding: 0
  `};
`;

const ShowMoreIcon = props => (
  <IconContainer {...props}>
    <Icon name="show_more" />
  </IconContainer>
);

ShowMoreIcon.propTypes = {
  isOpen: PropTypes.bool,
};

export default ShowMoreIcon;
