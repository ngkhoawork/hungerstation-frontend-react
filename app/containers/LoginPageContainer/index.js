/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import saga from '../App/authSagas';
import { loginRequest } from '../App/authActions';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

@injectSaga({ key: 'loginpagecontainer', saga })
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit } = this.props;
    return <LoginForm {...this.props} onSubmit={onSubmit} />;
  }
}
