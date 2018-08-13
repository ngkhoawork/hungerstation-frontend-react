/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

import ForgotPasswordForm from 'components/ForgotPasswordForm';

import messages from './messages';

const ForgotPasswordPage = () => (
  <Grid
    container
    spacing={24}
    direction="row"
    justify="center"
    alignItems="center"
    alignContent="center"
  >
    <Grid item xs={10} sm={6} align>
      <Typography align="center" variant="display1" gutterBottom>
        <FormattedMessage {...messages.header} />
      </Typography>
      <Typography align="center" variant="caption" gutterBottom>
        <FormattedMessage {...messages.subheader} />
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <ForgotPasswordForm />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ForgotPasswordPage;
