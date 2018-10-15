import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersContainer, StyledItem } from '../Styled';

const DeliveryTypes = ({
  deliveryOptions,
  toggleFilter,
  chosenOptions,
  title,
}) => (
  <StyledFiltersContainer>
    <CategoryTitle title={title} selectionQuantity={chosenOptions.length} />
    {deliveryOptions.map(({ id, name }) => (
      <StyledItem
        key={id}
        hasBorder
        onClick={() =>
          toggleFilter({ filterKey: 'delivery_options', value: id })
        }
      >
        <Paragraph color={chosenOptions.includes(id) ? 'black' : silverChalice}>
          {name}
        </Paragraph>
        {chosenOptions.includes(id) && <Icon name="check" />}
      </StyledItem>
    ))}
  </StyledFiltersContainer>
);

DeliveryTypes.propTypes = {
  deliveryOptions: PropTypes.array,
  chosenOptions: PropTypes.array,
  toggleFilter: PropTypes.func,
  title: PropTypes.string,
};

export default DeliveryTypes;
