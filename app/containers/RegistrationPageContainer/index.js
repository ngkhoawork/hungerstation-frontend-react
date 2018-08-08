/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';

import RegistrationForm from 'components/RegistrationForm';

import messages from './messages';
import saga from '../App/authSagas';
import { registerRequest } from '../App/authActions';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: registerRequest,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectSaga({ key: 'registrationPageContainer', saga })
export default class RegistrationPageContainer extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <RegistrationForm onSubmit={onSubmit} />
      </div>
    );
  }
}
