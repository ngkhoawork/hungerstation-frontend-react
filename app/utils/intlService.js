import { IntlProvider } from 'react-intl';

import { translationMessages, DEFAULT_LOCALE } from '../i18n';

export const priceIntlOptions = {
  style: 'currency',
  currency: 'SAR',
  minimumFractionDigits: 0,
};

export const getLocaleName = ({ name, name_en }, locale) => {
  if (locale === 'sa') return name;
  return name_en || name;
};

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

  formatTime(...args) {
    return this.getIntl().formatTime(...args);
  }

  formatDate(...args) {
    return this.getIntl().formatDate(...args);
  }

  formatRelative(...args) {
    return this.getIntl().formatRelative(...args);
  }
}

const intlService = new Intl();

export default intlService;
