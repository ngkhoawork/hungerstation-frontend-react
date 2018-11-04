import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flex } from 'utils/css/styles';
import { fontFamilyLight } from 'utils/css/variables';

const StyledInput = styled.input`
  ${flex({ align: 'flex-end', justify: 'center' })};
  line-height: 30px;
  width: 100%;
  font-size: 16px;
  font-family: ${fontFamilyLight};
  outline: none;
  border-bottom: 1px solid #f4f4f4;
  padding-left: 24px;
`;

const SearchInput = ({ searchRestaurantAction }) => (
  <StyledInput
    placeholder="Search"
    onChange={e => searchRestaurantAction(e.target.value)}
  />
);

SearchInput.propTypes = {
  searchRestaurantAction: PropTypes.func.isRequired,
};

export default SearchInput;
