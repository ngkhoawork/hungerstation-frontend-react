import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import LocaleToggle from '../index';

describe('<LocaleToggle />', () => {
  it('should connect to a store state', () => {
    const expectedState = {
      locale: 'en',
    };

    const mapStateToProps = state => ({
      state,
    });

    const ConnectedComponent = connect(mapStateToProps)(LocaleToggle);
    const component = shallowWithStore(
      <ConnectedComponent />,
      createMockStore(expectedState),
    );

    expect(component.props().state).toEqual(expectedState);
  });

  it('it should dispatch actions:', () => {
    const action = {
      type: CHANGE_LOCALE,
    };

    const mapDispatchToProps = dispatch => ({
      changeLocale() {
        dispatch(action);
      },
    });

    const store = createMockStore();
    const ConnectedComponent = connect(
      undefined,
      mapDispatchToProps,
    )(LocaleToggle);
    const component = shallowWithStore(<ConnectedComponent />, store);

    component.props().changeLocale();
    expect(store.isActionDispatched(action)).toBe(true);
  });
});
