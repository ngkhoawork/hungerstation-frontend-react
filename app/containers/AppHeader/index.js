import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { logout } from 'modules/auth/actions';
import {
  makeSelectIsLoggedIn,
  makeSelectCurrentUser,
} from 'modules/auth/selectors';
import Header from 'components/Header';

const enhanced = compose(
  withRouter,
  connect(
    createStructuredSelector({
      isLoggedIn: makeSelectIsLoggedIn,
      currentUser: makeSelectCurrentUser,
    }),
    { logout },
  ),
);

const AppHeader = ({ isLoggedIn, currentUser, ...rest }) => (
  <Header isLoggedIn={isLoggedIn} userInfo={currentUser} {...rest} />
);

AppHeader.propTypes = {
  isLoggedIn: PropTypes.bool,
  currentUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default enhanced(AppHeader);
