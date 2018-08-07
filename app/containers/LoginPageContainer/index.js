/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { logUserIn } from './actions';

const mapStateToProps = createStructuredSelector({
  loginpagecontainer: makeSelectLoginPageContainer(),
});

const mapDispatchToProps = {
  handleUserLogin: logUserIn,
};

@injectReducer({ key: 'loginpagecontainer', reducer })
@injectSaga({ key: 'loginpagecontainer', saga })
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  static propTypes = {
    handleUserLogin: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { handleUserLogin } = this.props;
    handleUserLogin();
  };

  render() {
    return <LoginForm {...this.props} onSubmit={this.onSubmit} />;
  }
}
