import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flex, sidePadding } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';

const StyledInput = styled.input`
  ${flex({ align: 'flex-end', justify: 'center' })};
  line-height: 30px;
  width: 100%;
  font-size: 16px;
  font-family: ${fontFamilyLight};
  outline: none;
  border-bottom: 1px solid ${wildSand};
  ${({ hasFocus }) => sidePadding('start', `${hasFocus ? 24 : 40}px`)};
`;

const SearchInput = ({ searchRestaurantAction, ...props }) => (
  <StyledInput
    placeholder="Search"
    onChange={e => searchRestaurantAction(e.target.value)}
    {...props}
  />
);

SearchInput.propTypes = {
  searchRestaurantAction: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
};

export default SearchInput;
