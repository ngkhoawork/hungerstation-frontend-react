import React from 'react';
import withModal from 'hocs/withModal';
import MobileFiltersSection from 'pages/RestaurantsPage/FiltersSection/MobileVersion';

const FiltersSectionInModal = withModal(MobileFiltersSection);

const Modals = () => (
  <React.Fragment>
    <FiltersSectionInModal />
  </React.Fragment>
);

export default Modals;
