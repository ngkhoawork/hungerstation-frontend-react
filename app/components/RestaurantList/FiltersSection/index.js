import React from 'react';
import PropTypes from 'prop-types';

import StyledFiltersSection from './StyledFiltersSection';
import Header from './Header';
import Category from './Category';
import Tags from './Tags';
import Cuisines from './Cuisines';

const FiltersSection = ({ tags, cuisines }) => (
  <StyledFiltersSection>
    <Header />
    <Category title="Tags">
      <Tags tags={tags} />
    </Category>
    <Category title="Cuisines">
      <Cuisines cuisines={cuisines} />
    </Category>
  </StyledFiltersSection>
);

FiltersSection.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FiltersSection;
