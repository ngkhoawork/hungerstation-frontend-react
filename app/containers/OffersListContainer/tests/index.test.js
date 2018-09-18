import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import 'utils/setupTests';

import { OffersListContainer } from '../index';

describe('<OffersListContainer />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      offers: [],
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(OffersListContainer);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });
});
