/**
 *
 * FiltersContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import {
  makeSelectIsLoggedIn,
  makeSelectCurrentUser,
} from 'modules/auth/selectors';
import Header from 'components/Header';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn,
  currentUser: makeSelectCurrentUser,
});

const enhanced = compose(
  connect(
    mapStateToProps,
    null,
  ),
);

const AppHeader = ({ isLoggedIn, currentUser, ...rest }) => (
  <Header isLoggedIn={isLoggedIn} userInfo={currentUser} {...rest} />
);

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default enhanced(AppHeader);
