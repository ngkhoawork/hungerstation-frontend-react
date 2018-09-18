import React from 'react';
import { silverChalice } from 'utils/colors';
import { filtersCategoryPropTypes } from 'props/filters';

import Paragraph from 'components/Paragraph';
import StyledTagsContainer from './StyledTagsContainer';
import StyledTag from './StyledTag';

const Tags = ({ tags }) => (
  <StyledTagsContainer>
    {tags.get('options').map(tag => (
      <StyledTag key={tag.get('id')} isSelected={tag.get('isSelected')}>
        <Paragraph color={tag.get('isSelected') ? 'black' : silverChalice}>
          {tag.get('label')}
        </Paragraph>
      </StyledTag>
    ))}
  </StyledTagsContainer>
);

Tags.propTypes = {
  tags: filtersCategoryPropTypes,
};

export default Tags;
