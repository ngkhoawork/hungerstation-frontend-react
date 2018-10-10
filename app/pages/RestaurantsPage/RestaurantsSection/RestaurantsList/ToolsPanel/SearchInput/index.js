import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const SearchInput = ({ searchRestaurantAction }) => (
  <StyledInput
    placeholder="Search"
    onChange={e => searchRestaurantAction(e.target.value)}
  />
);

export default SearchInput;

SearchInput.propTypes = {
  searchRestaurantAction: PropTypes.func.isRequired,
};

const StyledInput = styled.input`
  ${flexBox(
    { align: 'flex-end', justify: 'center' },
    `
    line-height: 30px;
    max-width: 336px;
    width: 100%;
    font-size: 16px;
    font-family: 'HungerStation-Light', sans-serif;
    outline: none;
    border-bottom: 1px solid #f4f4f4;
    padding-left: 24px;
  `,
  )};
`;
