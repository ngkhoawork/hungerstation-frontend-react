/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from 'i18n'; // eslint-disable-line

export const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return onChangeLocale(state, action);
    default:
      return state;
  }
}

const onChangeLocale = (state, action) => {
  const { locale } = action;
  return state.merge({
    locale,
  });
};

export default languageProviderReducer;
