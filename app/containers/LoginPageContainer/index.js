/**
 *
 * LoginPageContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import saga from '../App/authSagas';
import { loginRequest } from '../App/authActions';
import messages from './messages';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onSubmit: loginRequest,
};

@injectSaga({ key: 'loginpagecontainer', saga })
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LoginPageContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  handleSubmit = values => {
    const {
      onSubmit,
      location: { state },
    } = this.props;

    let from;
    if (state) {
      from = state.from.pathname;
    } else {
      from = '/';
    }
    onSubmit(...values, from);
  };

  render() {
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
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <LoginForm {...this.props} onSubmit={this.handleSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
