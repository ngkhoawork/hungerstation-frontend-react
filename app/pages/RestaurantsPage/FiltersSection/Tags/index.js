import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { array, func, shape } from 'prop-types';
import { flexBox } from 'utils/css/styles';
import { silverChalice, gold, wildSand } from 'utils/css/colors';
import { toggleFilterAction } from 'modules/restaurants/actions';
import {
  selectFilters,
  selectChosenTagsArray,
} from 'modules/restaurants/selectors';

import Paragraph from 'components/Paragraph';

const decorate = connect(
  state => ({
    filters: selectFilters(state),
    chosenTagsTypes: selectChosenTagsArray(state),
  }),
  { toggleFilterAction },
);

const Tags = ({ filters: { tags }, chosenTagsTypes, toggleFilterAction }) => (
  <StyledTagsContainer>
    {tags.map(({ id, name, type }) => (
      <StyledTag
        key={id}
        isSelected={chosenTagsTypes.includes(type)}
        onClick={() => toggleFilterAction({ filterKey: 'tags', value: type })}
      >
        <Paragraph
          color={chosenTagsTypes.includes(type) ? 'black' : silverChalice}
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
  toggleFilterAction: func,
};

export TagsTiltle from './TagsTitle';
export default decorate(Tags);

const StyledTag = styled.span`
  ${flexBox(
    { align: 'flex-start' },
    `
    margin-right: 8px;
    border-radius: 8px;
    padding: 3px 8px 4px;
  `,
  )};
  background-color: ${({ isSelected }) => (isSelected ? gold : wildSand)};
`;

const StyledTagsContainer = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    flex-wrap: wrap
  `,
  )};
`;
