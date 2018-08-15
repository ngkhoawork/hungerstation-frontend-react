/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import RegistrationPage from 'components/RegistrationPage';

import { registerRequest } from './actions';
import saga from './saga';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectSaga({ key: 'auth', saga })
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
    onSubmit(...values, from);
  };

  render() {
    return <RegistrationPage onSubmit={this.handleSubmit} />;
  }
}

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func,
};
