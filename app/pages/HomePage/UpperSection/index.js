import React from 'react';
import { withRouter } from 'react-router-dom';
import intl from 'utils/intlService';
// import SearchTypeContainer from 'containers/SearchTypeContainer';
import SearchBarContainer from 'containers/SearchBarContainer';
import AppHeader from 'containers/AppHeader';
import StyledUpperSection from './StyledUpperSection';
import Subheader from './Subheader';
import Header from './Header';
// import FiltersWrapper from './FiltersWrapper';
import StyledSection from '../StyledSection';
// import QuickFilters from './SearchTypes/QuickFilters';

import messages from '../messages';
const UpperSection = ({ isProfileDropdownClosed, ...props }) => (
  <StyledUpperSection {...props}>
    <AppHeader isShown={!isProfileDropdownClosed} />
    <Subheader>{intl.formatMessage(messages.subheader)}</Subheader>
    <Header>{intl.formatMessage(messages.header)}</Header>
    <StyledSection>
      {/* <SearchTypeContainer /> */}
      <SearchBarContainer />
    </StyledSection>
    {/* <FiltersWrapper>
      <QuickFilters />
    </FiltersWrapper> */}
  </StyledUpperSection>
);

export default withRouter(UpperSection);
