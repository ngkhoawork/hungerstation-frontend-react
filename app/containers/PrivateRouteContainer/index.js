import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PrivateRoute from 'components/PrivateRoute';
import { selectIsLoggedIn } from '../App/selectors';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
});

@connect(mapStateToProps)
export default class PrivateRouteContainer extends Component {
  render() {
    return <PrivateRoute {...this.props} />;
  }
}
