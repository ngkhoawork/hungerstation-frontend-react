import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from 'components/HomePage/StyledContainer';
import TextItem from 'components/HomePage/TextItem';
import ItemContainer from './ItemContainer';
import ActiveBorder from './ActiveBorder';

const OptionsChoice = ({ options, selectedOption, onOptionSelect }) => (
  <StyledContainer>
    {options.map(option => (
      <ItemContainer key={option.id} onClick={() => onOptionSelect(option.id)}>
        <TextItem size={15} weight={500} transform="uppercase">
          {option.name}
        </TextItem>
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
