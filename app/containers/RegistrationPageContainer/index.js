/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RegistrationPage from 'components/RegistrationPage';

import { registerRequest } from './actions';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class RegistrationPageContainer extends React.Component {
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
    return <RegistrationPage onSubmit={this.handleSubmit} />;
  }
}

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func,
};
