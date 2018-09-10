import React from 'react';
import PropTypes from 'prop-types';
import { wildSant, silverChalice } from 'utils/colors';
import { compose, withState, withHandlers } from 'recompose';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';
import StyledDetails from '../StyledDetails';
import StyledAction from './StyledAction';

const Cuisines = ({ cuisines, isExpanded, toggleExpandibility }) => {
  const cuisineList = isExpanded ? cuisines : cuisines.slice(0, 4);
  return (
    <StyledContainer>
      {cuisineList.map(cuisine => (
        <StyledItem key={cuisine.id}>
          <StyledDetails>
            <CircledItem color={wildSant} width={28}>
              <Icon name={cuisine.id} size={12} />
            </CircledItem>
            <Paragraph color={cuisine.isSelected ? 'black' : silverChalice}>
              {cuisine.label}
            </Paragraph>
          </StyledDetails>
          {cuisine.isSelected && <Icon name="check" />}
        </StyledItem>
      ))}
      <StyledAction onClick={toggleExpandibility} isExpanded={isExpanded}>
        <Paragraph>{isExpanded ? 'Less' : 'More'}</Paragraph>
        <Icon name="arrow-circled" size={13} />
      </StyledAction>
    </StyledContainer>
  );
};

Cuisines.propTypes = {
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpandibility: PropTypes.func.isRequired,
};

const enhanced = compose(
  withState('isExpanded', 'setExpandibility', false),
  withHandlers({
    toggleExpandibility: props => () => {
      props.setExpandibility(!props.isExpanded);
    },
  }),
);

export default enhanced(Cuisines);
