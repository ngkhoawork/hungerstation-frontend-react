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

import { makeSelectIsLoggedIn } from 'modules/auth/selectors';
import Header from 'components/Header';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn,
  // userInfo: {},
});

const enhanced = compose(
  connect(
    mapStateToProps,
    null,
  ),
);

const AppHeader = ({ isLoggedIn, userInfo, ...rest }) => (
  <Header isLoggedIn={isLoggedIn} userInfo={userInfo} {...rest} />
);

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userInfo: PropTypes.object,
};

export default enhanced(AppHeader);
