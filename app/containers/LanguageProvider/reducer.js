/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_LOCALE } from 'i18n'; // eslint-disable-line
import intlService from 'utils/intlService';
import { getStorageItem, setStorageItem } from 'utils/localStorage';
import { CHANGE_LOCALE } from './constants';

const initialLocale = getStorageItem('locale') || DEFAULT_LOCALE;
intlService.setLocale(initialLocale);

export const initialState = fromJS({
  locale: initialLocale,
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
  setStorageItem('locale', locale);

  return state.merge({
    locale,
  });
};

export default languageProviderReducer;
