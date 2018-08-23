import React from 'react';
import PropTypes from 'prop-types';

import QuickFilters from './QuickFilters';
import StyledContainer from './StyledContainer';
import Types from './Types';

const SearchTypes = ({ selectSearchType }) => (
  <StyledContainer>
    <Types onSelect={selectSearchType} />
    <QuickFilters />
  </StyledContainer>
);

SearchTypes.propTypes = {
  selectSearchType: PropTypes.func.isRequired,
};

export default SearchTypes;
