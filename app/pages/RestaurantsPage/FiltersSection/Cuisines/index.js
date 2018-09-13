import React from 'react';
import PropTypes from 'prop-types';
import { wildSant, silverChalice } from 'utils/colors';
import { compose, withState, withHandlers } from 'recompose';
import { filtersCategoryPropTypes } from 'props/filters';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Group from 'components/Group';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';
import StyledAction from './StyledAction';

const Cuisines = ({
  cuisines,
  isExpanded,
  toggleCuisineOptionsExpandibility,
}) => {
  const cuisineList = isExpanded
    ? cuisines.options
    : cuisines.options.slice(0, 4);
  return (
    <StyledContainer>
      {cuisineList.map(cuisine => (
        <StyledItem key={cuisine.id}>
          <Group>
            <CircledItem color={wildSant} width={28}>
              <Icon name={cuisine.id} size={12} />
            </CircledItem>
            <Paragraph
              color={cuisine.isSelected ? 'black' : silverChalice}
              margin="0 0 -3px 10px"
            >
              {cuisine.label}
            </Paragraph>
          </Group>
          {cuisine.isSelected && <Icon name="check" />}
        </StyledItem>
      ))}
      <StyledAction
        onClick={toggleCuisineOptionsExpandibility}
        isExpanded={isExpanded}
      >
        <Paragraph>{isExpanded ? 'Less' : 'More'}</Paragraph>
        <Icon name="arrow-circled" size={13} />
      </StyledAction>
    </StyledContainer>
  );
};

Cuisines.propTypes = {
  cuisines: filtersCategoryPropTypes,
  isExpanded: PropTypes.bool.isRequired,
  toggleCuisineOptionsExpandibility: PropTypes.func.isRequired,
};

const enhanced = compose(
  withState('isExpanded', 'setExpandibility', false),
  withHandlers({
    toggleCuisineOptionsExpandibility: props => e => {
      e.stopPropagation();
      props.setExpandibility(!props.isExpanded);
    },
  }),
);

export default enhanced(Cuisines);
