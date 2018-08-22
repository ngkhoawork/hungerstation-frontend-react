/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginPage from 'components/LoginPage';

import { loginRequest } from './actions';

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

@connect(
  null,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  handleSubmit = values => {
    const {
      onSubmit,
      location: { state },
    } = this.props;

    let from;
    if (state) {
      from = state.from.pathname;
    } else {
      from = '/';
    }

    onSubmit(values.toJS(), from);
  };

  render() {
    return <LoginPage onSubmit={this.handleSubmit} />;
  }
}
