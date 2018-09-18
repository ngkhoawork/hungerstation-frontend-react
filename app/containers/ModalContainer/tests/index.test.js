import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { ModalContainer } from '../index';

describe('<ModalContainer />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      isOpen: false,
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(ModalContainer);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });
});
