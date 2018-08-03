/**
 *
 * LoginPageContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const LoginPageContainer = () => <LoginForm />;

const mapStateToProps = createStructuredSelector({
  loginpagecontainer: makeSelectLoginPageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginpagecontainer', reducer });
const withSaga = injectSaga({ key: 'loginpagecontainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPageContainer);
