import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from 'utils/css/styles';

import { clearForm } from 'hocs/withFormState/actions';
import {
  makeSelectSubmitting,
  makeSelectErrors,
} from 'hocs/withFormState/selectors';

const mapStateToProps = createStructuredSelector({
  submitting: makeSelectSubmitting(),
  error: makeSelectErrors(),
});

const mapDispatchToProps = {
  clearFormAction: clearForm,
};

const FormContainer = WrappedComponent => {
  @withRouter
  @withStyles(styles)
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

export default FormContainer;
