/**
 *
 * LoginForm
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form/immutable';
import { injectIntl, intlShape } from 'react-intl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from 'utils/styles';

import validate from 'utils/form/validation';
import TextInput from 'components/TextInput';
import TextItem from 'components/TextItem';

import StyledForm from './StyledForm';
import messages from './messages';

const printError = error => {
  if (!error) return null;

  return (
    <div>
      {typeof error === 'string' ? (
        <div>{error}</div>
      ) : (
        error.map(err => <div>{err.message}</div>)
      )}
    </div>
  );
};
@withStyles(styles)
@injectIntl
@reduxForm({
  form: 'signinForm',
  validate: (values, { intl }) => validate(values, intl, 'signin'),
})
export default class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    error: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  };

  // printError = error => {
  //   if (!error) return null;

  //   return (
  //     <div>
  //       {typeof error === 'string' ? (
  //         <div>{error}</div>
  //       ) : (
  //         error.map(err => <div>{err.message}</div>)
  //       )}
  //     </div>
  //   );
  // };

  render() {
    const { handleSubmit, submitting, intl, classes, error } = this.props;

    return (
      <StyledForm onSubmit={handleSubmit}>
        {printError(error)}
        <div>
          <Field
            fullWidth
            name="mobile"
            type="text"
            component={TextInput}
            label={intl.formatMessage(messages.numberLabel)}
          />
        </div>
        <div>
          <Field
            fullWidth
            name="password"
            type="password"
            component={TextInput}
            label={intl.formatMessage(messages.passwordLabel)}
          />
        </div>
        <Button
          type="submit"
          disabled={submitting}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <TextItem fontFamily="regular" size={20}>
            {intl.formatMessage(messages.buttonLabel)}
          </TextItem>
        </Button>
      </StyledForm>
    );
  }
}
