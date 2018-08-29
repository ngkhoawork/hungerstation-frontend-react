import React from 'react';
import PropTypes from 'prop-types';

import StyledFiltersSection from './StyledFiltersSection';
import Header from './Header';
import Category from './Category';
import Tags from './Tags';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';

const FiltersSection = ({ tags, cuisines, deliveryTypes }) => (
  <StyledFiltersSection>
    <Header />
    <Category title="Tags">
      <Tags tags={tags} />
    </Category>
    <Category title="Cuisines">
      <Cuisines cuisines={cuisines} />
    </Category>
    <Category title="Orders">
      <Orders />
    </Category>
    <Category title="Delivery Types">
      <DeliveryTypes types={deliveryTypes} />
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
  deliveryTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FiltersSection;
