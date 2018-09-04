import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';

const DeliveryTypes = ({ types }) => (
  <StyledContainer>
    {types.map(type => (
      <StyledItem key={type.id} hasBorder>
        <Paragraph color={silverChalice}>{type.label}</Paragraph>
        {type.isSelected && <Icon name="tick" />}
      </StyledItem>
    ))}
  </StyledContainer>
);

DeliveryTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default DeliveryTypes;
