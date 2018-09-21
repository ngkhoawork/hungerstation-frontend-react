import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { LOGIN_REQUEST } from 'modules/user/actions';
import { LoginFormContainer } from '../index';

describe('<LoginFormContainer />', () => {
  it('should dispatch action onSubmit', () => {
    const action = {
      type: LOGIN_REQUEST,
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
    )(LoginFormContainer);
    const component = shallowWithStore(<ConnectedComponent />, store);

    component.props().onSubmit();
    expect(store.isActionDispatched(action)).toBe(true);
  });
});
