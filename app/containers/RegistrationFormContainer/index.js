/**
 *
 * RegistrationFormContainer
 *
 */

import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form/immutable';
import validate from 'utils/form/validation';
import RegistrationForm from 'components/RegistrationForm';
import styles from 'utils/styles';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';

@withStyles(styles)
@injectIntl
@reduxForm({
  form: 'signupForm',
  validate: (values, { intl }) => validate(values, intl, 'signup'),
  enableReinitialize: true,
  touchOnBlur: false,
  updateUnregisteredFields: true,
})
export default class RegistrationFormContainer extends PureComponent {
  render() {
    return <RegistrationForm {...this.props} />;
  }
}
