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

import RegistrationForm from 'components/RegistrationForm';

import injectSaga from 'utils/injectSaga';
import makeSelectRegistrationPageContainer from './selectors';
import saga from './saga';
import messages from './messages';
import { registerRequest } from '../App/authActions';

const mapStateToProps = createStructuredSelector({
  registrationpagecontainer: makeSelectRegistrationPageContainer(),
});

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

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
