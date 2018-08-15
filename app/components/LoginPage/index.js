/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import LoginForm from 'components/LoginForm';
import TextLink from 'components/TextLink';
import BackHome from 'components/BackHome';

import messages from './messages';

const LoginPage = ({ onSubmit }) => (
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
        <Grid item xs={12} sm={6}>
          <LoginForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Typography align="center" variant="caption" gutterBottom>
        <TextLink to="/reset-password" color="grey">
          <FormattedMessage {...messages.forgotPassword} />&nbsp;
        </TextLink>
      </Typography>
      <Typography align="center" variant="caption" gutterBottom>
        <FormattedMessage {...messages.noAccount} />&nbsp;
        <TextLink to="/login">
          <FormattedMessage {...messages.signUp} />
        </TextLink>
      </Typography>
      <br />
      <BackHome />
    </Grid>
  </Grid>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginPage;
