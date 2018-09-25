import React from 'react';
import PropTypes from 'prop-types';

import { fuscousGray } from 'utils/css/colors';
// import StyledContainer from 'components/HomePage/StyledContainer';
import Paragraph from 'components/Paragraph';
import Group from 'components/Group';
import ItemContainer from './ItemContainer';
import ActiveBorder from './ActiveBorder';

const OptionsChoice = ({
  options,
  selectedOption,
  onOptionSelect,
  variant,
}) => (
  <Group>
    {options.map(option => (
      <ItemContainer key={option.id} onClick={() => onOptionSelect(option.id)}>
        <Paragraph color={variant === 'dark' ? fuscousGray : 'white'}>
          {option.name}
        </Paragraph>
        {option.id === selectedOption && <ActiveBorder />}
      </ItemContainer>
    ))}
  </Group>
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
  variant: PropTypes.string,
};

OptionsChoice.defaultProps = {
  variant: 'dark',
};

export default OptionsChoice;
