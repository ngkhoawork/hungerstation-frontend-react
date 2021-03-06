import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { registerAction } from 'modules/user/actions';
import { RegistrationFormContainer } from '../index';

describe('<RegistrationFormContainer />', () => {
  it('should dispatch action onSubmit', () => {
    const action = {
      type: registerAction.type,
    };

    const mapDispatchToProps = dispatch => ({
      onSubmit() {
        dispatch(action);
      },
    });

    const store = createMockStore();
    const ConnectedComponent = connect(
      undefined,
      mapDispatchToProps,
    )(RegistrationFormContainer);
    const component = shallowWithStore(<ConnectedComponent />, store);

    component.props().onSubmit();
    expect(store.isActionDispatched(action)).toBe(true);
  });
});
