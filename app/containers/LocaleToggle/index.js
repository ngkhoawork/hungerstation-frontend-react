/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { appLocales } from 'i18n';
import { changeLocaleAction } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import OptionsChoice from './OptionsChoice';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => {
    dispatch(changeLocaleAction(locale));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
/* eslint-disable react/prefer-stateless-function */
export default class LocaleToggle extends React.PureComponent {
  static propTypes = {
    changeLocale: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    variant: PropTypes.string,
  };

  getOptions = () =>
    appLocales.map(locale => ({
      id: locale,
      name: locale === 'en' ? 'eng' : 'عربي',
    }));

  render() {
    const { locale, changeLocale, variant } = this.props;
    return (
      <OptionsChoice
        variant={variant}
        options={this.getOptions()}
        selectedOption={locale}
        onOptionSelect={changeLocale}
      />
    );
  }
}
