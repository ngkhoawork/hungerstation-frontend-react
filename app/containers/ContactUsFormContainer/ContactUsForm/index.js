/**
 *
 * Contact Us Form
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import { List } from 'immutable';
import intl from 'utils/intlService';
import { printErrors } from 'utils/form/helpers';
import { StyledForm, StyledFieldWrapper } from 'utils/css/styledComponents';

import TextItem from 'components/TextItem';
import TextInput from 'components/TextInput';
import ContactSubject from 'components/ContactSubject';
import MobileNumber from 'components/PhoneNumberInput';

import messages from './messages';

const ContactUsForm = ({ handleSubmit, submitting, classes, error }) => (
  <StyledForm onSubmit={handleSubmit}>
    {printErrors(error)}
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em" color="grey">
      <FormattedMessage {...messages.subheader} />
    </TextItem>

    <StyledFieldWrapper
      fullWidth
      name="type"
      type="text"
      component={ContactSubject}
    />

    <StyledFieldWrapper
      autoComplete="nope"
      name="name"
      type="text"
      component={TextInput}
      label="{intl.formatMessage(messages.usernameLabel)}"
      fullWidth
    />
    <StyledFieldWrapper
      autoComplete="nope"
      name="phone"
      component={MobileNumber}
      label="{intl.formatMessage(messages.numberLabel)}"
    />
    <StyledFieldWrapper
      InputProps={{
        noValidate: true,
      }}
      autoComplete="nope"
      name="email"
      type="email"
      component={TextInput}
      label="{intl.formatMessage(messages.emailLabel)}"
      fullWidth
    />

    <StyledFieldWrapper
      fullWidth
      name="mobile"
      type="text"
      component={TextInput}
      // label={intl.formatMessage(messages.numberLabel)}
      label="numberLabel"
    />

    <Button
      type="submit"
      disabled={submitting}
      variant="contained"
      color="primary"
      className={classes.button}
    >
      <span className={classes.buttonText}>
        {intl.formatMessage(messages.send)}
      </span>
    </Button>
  </StyledForm>
);

ContactUsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  error: PropTypes.instanceOf(List),
};

export default ContactUsForm;
