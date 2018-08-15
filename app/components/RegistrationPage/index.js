/**
 *
 * RegistrationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RegistrationForm from 'components/RegistrationForm';
import TextLink from 'components/TextLink';

import messages from './messages';

const RegistrationPage = ({ onSubmit }) => (
  <Grid
    container
    spacing={24}
    direction="row"
    justify="center"
    alignItems="center"
    alignContent="center"
  >
    <Grid item xs={10} sm={6} align="true">
      <Typography align="center" variant="display1" gutterBottom>
        <FormattedMessage {...messages.header} />
      </Typography>
      <Typography align="center" variant="caption" gutterBottom>
        <FormattedMessage {...messages.subheader} />
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <RegistrationForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Typography align="center" variant="caption" gutterBottom>
        <FormattedMessage {...messages.haveAccount} />&nbsp;
        <TextLink to="/login">
          <FormattedMessage {...messages.logIn} />
        </TextLink>
      </Typography>
    </Grid>
  </Grid>
);

RegistrationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationPage;
