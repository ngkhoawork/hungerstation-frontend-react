import React from 'react';
import { silverChalice } from 'utils/colors';
import { filtersCategoryPropTypes } from 'props/filters';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';

const DeliveryTypes = ({ types }) => (
  <StyledContainer>
    {types.options.map(type => (
      <StyledItem key={type.id} hasBorder>
        <Paragraph color={type.isSelected ? 'black' : silverChalice}>
          {type.label}
        </Paragraph>
        {type.isSelected && <Icon name="check" />}
      </StyledItem>
    ))}
  </StyledContainer>
);

DeliveryTypes.propTypes = {
  types: filtersCategoryPropTypes,
};

export default DeliveryTypes;
