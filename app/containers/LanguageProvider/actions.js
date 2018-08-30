/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';

export const changeLocaleAction = languageLocale => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});
