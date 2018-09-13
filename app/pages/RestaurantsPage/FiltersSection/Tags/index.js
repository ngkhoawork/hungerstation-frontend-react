import React from 'react';
import { silverChalice } from 'utils/colors';
import { filtersCategoryPropTypes } from 'props/filters';

import Paragraph from 'components/Paragraph';
import StyledTagsContainer from './StyledTagsContainer';
import StyledTag from './StyledTag';

const Tags = ({ tags }) => (
  <StyledTagsContainer>
    {tags.options.map(tag => (
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
