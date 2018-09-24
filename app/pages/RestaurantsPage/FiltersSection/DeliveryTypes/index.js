import React from 'react';
import { silverChalice } from 'utils/css/colors';
import { filtersCategoryPropTypes } from 'propTypes/filters';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';

const DeliveryTypes = ({ types }) => (
  <StyledContainer>
    {types.get('options').map(type => (
      <StyledItem key={type.get('id')} hasBorder>
        <Paragraph color={type.get('isSelected') ? 'black' : silverChalice}>
          {type.get('label')}
        </Paragraph>
        {type.get('isSelected') && <Icon name="check" />}
      </StyledItem>
    ))}
  </StyledContainer>
);

DeliveryTypes.propTypes = {
  types: filtersCategoryPropTypes,
};

export default DeliveryTypes;
