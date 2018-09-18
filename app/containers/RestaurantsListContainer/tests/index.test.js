import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { RestaurantsListContainer } from '../index';

describe('<RestaurantsListContainer />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      restaurants: [],
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(
      RestaurantsListContainer,
    );
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });
});
