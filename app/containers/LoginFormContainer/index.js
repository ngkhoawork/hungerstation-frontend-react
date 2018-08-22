/**
 *
 * RegistrationFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form/immutable';
import validate from 'utils/form/validation';
import LoginForm from 'components/LoginForm';
import styles from 'utils/styles';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';

@withStyles(styles)
@injectIntl
@reduxForm({
  form: 'signinForm',
  validate: (values, { intl }) => validate(values, intl, 'signin'),
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  touchOnBlur: false,
  updateUnregisteredFields: true,
  immutableProps: ['mobile', 'password'],
})
export default class LoginFormContainer extends PureComponent {
  render() {
    return <LoginForm {...this.props} />;
  }
}
