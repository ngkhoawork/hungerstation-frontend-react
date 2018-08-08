/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
import fakeAuth from 'utils/fakeAuth';

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
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    redirectToReferrer: false,
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  handleSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
    this.login();
  };

  render() {
    const {
      location: {
        state: { from },
      },
    } = this.props || {
      from: { pathname: '/userprofile' },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return <LoginForm {...this.props} onSubmit={this.handleSubmit} />;
  }
}
