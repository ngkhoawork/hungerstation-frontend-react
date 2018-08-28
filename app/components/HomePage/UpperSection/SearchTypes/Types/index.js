import React from 'react';
import PropTypes from 'prop-types';

import Paragrpaph from 'components/Paragraph';
import Switch from '../Switch';
import StyledContainer from './StyledContainer';

const Types = ({ onSelect }) => (
  <StyledContainer>
    <Paragrpaph color="white">Delivery</Paragrpaph>
    <Switch onSelect={onSelect} />
    <Paragrpaph color="white">Pick up</Paragrpaph>
  </StyledContainer>
);

Types.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Types;
