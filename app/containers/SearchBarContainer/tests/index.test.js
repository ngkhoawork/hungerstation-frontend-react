import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import {
  selectCityAction,
  selectDistrictAction,
  getCurrentLocationAction,
} from 'modules/location/actions';
import SearchBarContainer from '../index';

describe('<SearchBarContainer />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      cities: [],
      districts: [],
      isSettlementLoaded: false,
      selectedCity: 'Warsaw',
      selectedDistrict: 'Wola',
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(SearchBarContainer);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });

  describe('it should dispatch actions:', () => {
    const actions = [
      { type: 'GET_CITIES' },
      { type: selectCityAction.type },
      { type: selectDistrictAction.type },
      { type: getCurrentLocationAction.type },
    ];

    const mapDispatchToProps = dispatch => ({
      getCities() {
        dispatch(actions[0]);
      },
      selectCity() {
        dispatch(actions[1]);
      },
      selectDistrict() {
        dispatch(actions[2]);
      },
      getCurrentLocation() {
        dispatch(actions[3]);
      },
    });

    const store = createMockStore();
    const ConnectedComponent = connect(
      undefined,
      mapDispatchToProps,
    )(SearchBarContainer);
    const component = shallowWithStore(<ConnectedComponent />, store);

    it('- get cities', () => {
      component.props().getCities();
      expect(store.isActionDispatched(actions[0])).toBe(true);
    });

    it('- selects city', () => {
      component.props().selectCity();
      expect(store.isActionDispatched(actions[1])).toBe(true);
    });

    it('- selects district', () => {
      component.props().selectDistrict();
      expect(store.isActionDispatched(actions[2])).toBe(true);
    });

    it('- gets current location', () => {
      component.props().getCurrentLocation();
      expect(store.isActionDispatched(actions[3])).toBe(true);
    });
  });
});
