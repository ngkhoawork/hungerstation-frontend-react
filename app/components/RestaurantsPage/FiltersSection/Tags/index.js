import React from 'react';
import PropTypes from 'prop-types';
import { silverChalice } from 'utils/colors';

import Paragraph from 'components/Paragraph';
import StyledTagsContainer from './StyledTagsContainer';
import StyledTag from './StyledTag';

const Tags = ({ tags }) => (
  <StyledTagsContainer>
    {tags.map(tag => (
      <StyledTag key={tag.id} isSelected={tag.isSelected}>
        <Paragraph color={tag.isSelected ? 'black' : silverChalice}>
          {tag.label}
        </Paragraph>
      </StyledTag>
    ))}
  </StyledTagsContainer>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Tags;
