import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';

import styles from 'utils/styles';

import { clearForm } from 'containers/Form/actions';
import {
  makeSelectSubmitting,
  makeSelectErrors,
} from 'containers/Form/selectors';

const mapStateToProps = createStructuredSelector({
  submitting: makeSelectSubmitting(),
  error: makeSelectErrors(),
});

const mapDispatchToProps = {
  clearFormAction: clearForm,
};

export const FormContainer = WrappedComponent => {
  @withRouter
  @withStyles(styles)
  @injectIntl
  @connect(
    mapStateToProps,
    mapDispatchToProps,
  )
  class Form extends PureComponent {
    handleSubmit = onSubmit => values => {
      const {
        location: { state },
      } = this.props;

      let from;
      if (state) {
        from = state.from.pathname;
      } else {
        from = '/';
      }

      onSubmit(values, from);
    };

    componentWillUnmount = () => {
      const { clearFormAction } = this.props;
      clearFormAction();
    };

    render() {
      return (
        <WrappedComponent submitHandler={this.handleSubmit} {...this.props} />
      );
    }
  }

  return Form;
};
