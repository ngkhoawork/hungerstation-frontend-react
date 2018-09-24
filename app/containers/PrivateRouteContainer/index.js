import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PrivateRoute from 'components/PrivateRoute';
import { makeSelectIsLoggedIn } from 'modules/auth/selectors';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn,
});

@connect(mapStateToProps)
export default class PrivateRouteContainer extends Component {
  render() {
    return <PrivateRoute {...this.props} />;
  }
}
