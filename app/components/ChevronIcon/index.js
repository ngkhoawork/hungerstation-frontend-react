import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';

export const IconContainer = styled.span`
  display: inline-block;
  position: relative;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  top: ${({ isOpen }) => (isOpen ? -1 : 0)}px;
`;

const ChevronIcon = props => (
  <IconContainer {...props}>
    <Icon name="more" />
  </IconContainer>
);

ChevronIcon.propTypes = {
  isOpen: PropTypes.bool,
};

export default ChevronIcon;
