/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_LOCALE } from 'i18n'; // eslint-disable-line

import intlService from 'utils/intlService';
import { CHANGE_LOCALE } from './constants';

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
  intlService.setLocale(locale);

  return state.merge({
    locale,
  });
};

export default languageProviderReducer;
