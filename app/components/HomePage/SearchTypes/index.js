import React from 'react';
import PropTypes from 'prop-types';

import OptionsChoice from 'components/OptionsChoice';
import QuickFilters from './QuickFilters';
import StyledContainer from './StyledContainer';

const SearchTypes = ({ options, selectSearchType, selectedSearchType }) => (
  <StyledContainer>
    <OptionsChoice
      options={options}
      onOptionSelect={selectSearchType}
      selectedOption={selectedSearchType}
    />
    <QuickFilters />
  </StyledContainer>
);

SearchTypes.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectSearchType: PropTypes.func.isRequired,
  selectedSearchType: PropTypes.string.isRequired,
};

export default SearchTypes;
