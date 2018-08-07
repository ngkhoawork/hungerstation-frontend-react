/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
// import { reduxForm } from 'redux-form/immutable';

import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  loginpagecontainer: makeSelectLoginPageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

@injectReducer({ key: 'loginpagecontainer', reducer })
@injectSaga({ key: 'loginpagecontainer', saga })
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  onSubmit = values => {
    console.log('++ submitting values:', values.toJS());
  };

  render() {
    return <LoginForm {...this.props} onSubmit={this.onSubmit} />;
  }
}
