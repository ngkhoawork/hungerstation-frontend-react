import React from 'react';
import PropTypes from 'prop-types';

import Paragrpaph from 'components/Paragrpaph';
import Switch from '../Switch';
import StyledContainer from './StyledContainer';

const Types = ({ onSelect }) => (
  <StyledContainer>
    <Paragrpaph>Delivery</Paragrpaph>
    <Switch onSelect={onSelect} />
    <Paragrpaph>Pick up</Paragrpaph>
  </StyledContainer>
);

Types.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Types;
