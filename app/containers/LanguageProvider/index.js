/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { compose, pure } from 'recompose';

import { makeSelectLocale } from './selectors';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
);

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const enhanced = compose(
  connect(mapStateToProps),
  pure,
);

export default enhanced(LanguageProvider);
