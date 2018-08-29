import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledContainer from '../StyledContainer';
import StyledItem from '../StyledItem';
import StyledDetails from '../StyledDetails';

const Cuisines = ({ cuisines }) => (
  <StyledContainer>
    {cuisines.map(cuisine => (
      <StyledItem key={cuisine.id}>
        <StyledDetails>
          <Icon name={cuisine.id} />
          <Paragraph color="lightgrey">{cuisine.label}</Paragraph>
        </StyledDetails>
        {cuisine.isSelected && <Icon name="tick" />}
      </StyledItem>
    ))}
  </StyledContainer>
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
