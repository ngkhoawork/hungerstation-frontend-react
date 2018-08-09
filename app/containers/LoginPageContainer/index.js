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
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string.isRequired,
        }),
      }).isRequired,
    }).isRequired,
  };

  handleSubmit = values => {
    const { onSubmit } = this.props;
    const {
      location: {
        state: { from },
      },
    } = this.props || {
      from: { pathname: '/' },
    };
    onSubmit(...values, from);
  };

  render() {
    return <LoginForm {...this.props} onSubmit={this.handleSubmit} />;
  }
}
