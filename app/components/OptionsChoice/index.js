import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from 'components/HomePage/StyledContainer';
import Paragrpaph from 'components/Paragraph';
import ItemContainer from './ItemContainer';
import ActiveBorder from './ActiveBorder';

const OptionsChoice = ({ options, selectedOption, onOptionSelect }) => (
  <StyledContainer>
    {options.map(option => (
      <ItemContainer key={option.id} onClick={() => onOptionSelect(option.id)}>
        <Paragrpaph color="white">{option.name}</Paragrpaph>
        {option.id === selectedOption && <ActiveBorder />}
      </ItemContainer>
    ))}
  </StyledContainer>
);

OptionsChoice.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  selectedOption: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
};

export default OptionsChoice;
