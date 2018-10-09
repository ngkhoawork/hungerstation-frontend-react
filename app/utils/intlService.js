import { IntlProvider } from 'react-intl';

import { translationMessages, DEFAULT_LOCALE } from '../i18n';

export class Intl {
  constructor(locale = DEFAULT_LOCALE) {
    this.locale = locale;
    this.intl = new IntlProvider(
      {
        locale,
        messages: translationMessages[locale],
      },
      {},
    ).getChildContext().intl;
  }

  setLocale(locale) {
    this.locale = locale;

    this.intl = new IntlProvider(
      {
        locale,
        messages: translationMessages[locale],
      },
      {},
    ).getChildContext().intl;
    return this.intl;
  }

  getIntl() {
    return this.intl;
  }

  formatMessage(...args) {
    return this.getIntl().formatMessage(...args);
  }

  formatNumber(...args) {
    return this.getIntl().formatNumber(...args);
  }
}

const intlService = new Intl();

export default intlService;
