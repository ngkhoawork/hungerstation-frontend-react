import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledCuisinesContainer from './StyledCuisinesContainer';
import StyledCuisineItem from './StyledCuisineItem';
import StyledDetails from './StyledDetails';

const Cuisines = ({ cuisines }) => (
  <StyledCuisinesContainer>
    {cuisines.map(cuisine => (
      <StyledCuisineItem>
        <StyledDetails>
          <Icon name={cuisine.id} />
          <Paragraph color="lightgrey">{cuisine.label}</Paragraph>
        </StyledDetails>
        {cuisine.isSelected && <Icon name="tick" />}
      </StyledCuisineItem>
    ))}
  </StyledCuisinesContainer>
);

Cuisines.propTypes = {
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Cuisines;
