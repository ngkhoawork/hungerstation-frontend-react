/**
 *
 * RegistrationPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RegistrationForm from 'components/RegistrationForm';

import injectSaga from 'utils/injectSaga';
import makeSelectRegistrationPageContainer from './selectors';
import saga from '../App/authSagas';
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
@injectSaga({ key: 'auth', saga })
export default class RegistrationPageContainer extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
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
              <RegistrationForm onSubmit={onSubmit} />
            </Grid>
          </Grid>
          <Typography align="center" variant="caption" gutterBottom>
            <FormattedMessage {...messages.haveAccount} />&nbsp;
            <Link to="/login">
              <FormattedMessage {...messages.logIn} />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

RegistrationPageContainer.propTypes = {
  onSubmit: PropTypes.func,
};
