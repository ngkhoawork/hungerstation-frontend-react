import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import Switch from '../Switch';
import StyledContainer from './StyledContainer';

const Types = ({ onSelect }) => (
  <StyledContainer>
    <Paragraph color="white">Delivery</Paragraph>
    <Switch onSelect={onSelect} />
    <Paragraph color="white">Pick up</Paragraph>
  </StyledContainer>
);

Types.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Types;
