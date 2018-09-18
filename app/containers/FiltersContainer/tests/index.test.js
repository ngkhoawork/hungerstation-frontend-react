import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { SHOW_MODAL, HIDE_MODAL } from 'containers/ModalContainer/constants';
import { FiltersContainer } from '../index';
import { TOGGLE_SECTION } from '../constants';

describe('<FiltersContainer />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      tags: [],
      cuisines: [],
      deliveryTypes: [],
      isModalOpened: [],
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(FiltersContainer);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });

  describe('it should dispatch actions:', () => {
    const actions = [
      { type: SHOW_MODAL },
      { type: HIDE_MODAL },
      { type: TOGGLE_SECTION },
    ];

    const mapDispatchToProps = dispatch => ({
      openModal() {
        dispatch(actions[0]);
      },
      closeModal() {
        dispatch(actions[1]);
      },
      toggleSection() {
        dispatch(actions[2]);
      },
    });

    const store = createMockStore();
    const ConnectedComponent = connect(
      undefined,
      mapDispatchToProps,
    )(FiltersContainer);
    const component = shallowWithStore(<ConnectedComponent />, store);

    it('- opens modal', () => {
      component.props().openModal();
      expect(store.isActionDispatched(actions[0])).toBe(true);
    });

    it('- hides modal', () => {
      component.props().closeModal();
      expect(store.isActionDispatched(actions[1])).toBe(true);
    });

    it('- toggles section', () => {
      component.props().toggleSection();
      expect(store.isActionDispatched(actions[2])).toBe(true);
    });
  });
});
