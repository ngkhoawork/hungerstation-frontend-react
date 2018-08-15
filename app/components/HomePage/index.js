/**
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';

import StyledPage from './StyledPage';
import Subheader from './Subheader';
import Header from './Header';
// import messages from './messages';

const HomePage = () => (
  <StyledPage>
    <Subheader>Food Deliver From</Subheader>
    <Header>The Top Restaurants in Saudi Arabia</Header>
  </StyledPage>
);

HomePage.propTypes = {};

export default HomePage;
