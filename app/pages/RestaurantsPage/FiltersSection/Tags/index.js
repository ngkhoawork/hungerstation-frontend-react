import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { array, func, shape, string } from 'prop-types';

import { flex } from 'utils/css/styles';
import { silverChalice, gold, wildSand } from 'utils/css/colors';
import { toggleFilterAction } from 'modules/restaurants/actions';
import {
  selectFilters,
  selectChosenTagsArray,
  selectChosenDeliveryOption,
} from 'modules/restaurants/selectors';
import Paragraph from 'components/Paragraph';

const StyledTag = styled.span`
  ${flex({ align: 'flex-start' })};
  margin: 0 0 8px 8px;
  border-radius: 8px;
  padding: 3px 8px 4px;
  background-color: ${({ isSelected }) => (isSelected ? gold : wildSand)};
`;

const StyledTagsContainer = styled.div`
  ${flex({ align: 'flex-start', wrap: 'wrap' })};
`;

const decorate = connect(
  state => ({
    filters: selectFilters(state),
    chosenTagsTypes: selectChosenTagsArray(state),
    chosenDeliveryOption: selectChosenDeliveryOption(state),
  }),
  { toggleFilterAction },
);

const Tags = ({
  filters: { tags },
  chosenTagsTypes,
  chosenDeliveryOption,
  toggleFilterAction,
}) => (
  <StyledTagsContainer>
    {tags.map(({ id, name, type }) => (
      <StyledTag
        key={id}
        isSelected={
          chosenTagsTypes.includes(type) || chosenDeliveryOption === type
        }
        onClick={() =>
          toggleFilterAction({
            filterKey:
              type === 'hungerstation_delivery' ? 'delivery_option' : 'tags',
            value:
              type === 'hungerstation_delivery' && chosenDeliveryOption === type
                ? 'all'
                : type,
          })
        }
      >
        <Paragraph
          color={
            chosenTagsTypes.includes(type) || chosenDeliveryOption === type
              ? 'black'
              : silverChalice
          }
        >
          {name}
        </Paragraph>
      </StyledTag>
    ))}
  </StyledTagsContainer>
);

Tags.propTypes = {
  filters: shape({
    tags: array,
  }),
  chosenTagsTypes: array,
  chosenDeliveryOption: string,
  toggleFilterAction: func,
};

export default decorate(Tags);
