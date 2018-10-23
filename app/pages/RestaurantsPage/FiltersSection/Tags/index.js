import React from 'react';
import { silverChalice } from 'utils/css/colors';
import { filtersCategoryPropTypes } from 'propTypes/filters';

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
  tags: filtersCategoryPropTypes,
};

export default Tags;
