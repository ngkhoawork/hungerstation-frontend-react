/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import OptionsChoice from 'components/OptionsChoice';

import { appLocales } from 'i18n';
import { changeLocaleAction } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

console.log('changeLocaleAction', changeLocaleAction);

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

const mapDispatchToProps = {
  changeLocale: changeLocaleAction,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
/* eslint-disable react/prefer-stateless-function */
export default class LocaleToggle extends React.PureComponent {
  static propTypes = {
    changeLocale: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
  };

  getOptions = () =>
    appLocales.map(locale => ({ id: locale, name: locale.toUpperCase() }));

  render() {
    const { locale, changeLocale } = this.props;
    return (
      <OptionsChoice
        options={this.getOptions()}
        selectedOption={locale}
        onOptionSelect={changeLocale}
      />
    );
  }
}

LocaleToggle.propTypes = {};
