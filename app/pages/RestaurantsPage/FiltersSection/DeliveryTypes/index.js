import React from 'react';
import PropTypes from 'prop-types';
import intl from 'utils/intlService';
import { silverChalice } from 'utils/css/colors';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import messages from './messages';
import CategoryTitle from '../CategoryTitle';
import { StyledFiltersContainer, StyledItem } from '../Styled';

const DeliveryTypes = ({
  deliveryOptions,
  toggleFilter,
  chosenOption,
  title,
}) => (
  <StyledFiltersContainer>
    <CategoryTitle title={title} withoutQuantity />
    <StyledItem
      hasBorder
      onClick={() =>
        toggleFilter({ filterKey: 'delivery_option', value: 'all' })
      }
    >
      <Paragraph color={chosenOption === 'all' ? 'black' : silverChalice}>
        {intl.formatMessage(messages.allDeliveryTypes)}
      </Paragraph>
      {chosenOption === 'all' && <Icon name="check" />}
    </StyledItem>
    {deliveryOptions.map(({ id, name, type }) => (
      <StyledItem
        key={id}
        hasBorder
        onClick={() =>
          toggleFilter({ filterKey: 'delivery_option', value: type })
        }
      >
        <Paragraph color={chosenOption === type ? 'black' : silverChalice}>
          {name}
        </Paragraph>
        {chosenOption === type && <Icon name="check" />}
      </StyledItem>
    ))}
  </StyledFiltersContainer>
);

DeliveryTypes.propTypes = {
  deliveryOptions: PropTypes.array,
  chosenOption: PropTypes.string,
  toggleFilter: PropTypes.func,
  title: PropTypes.string,
};

export default DeliveryTypes;
