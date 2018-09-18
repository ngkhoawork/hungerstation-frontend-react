import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import App from '../index';

describe('<App />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      dir: 'rtl',
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(App);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });
});
