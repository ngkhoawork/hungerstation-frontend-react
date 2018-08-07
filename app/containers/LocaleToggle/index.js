/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';

import messages from './messages';

import { appLocales } from '../../i18n';
import { changeLocale as changeLocaleAction } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

const mapDispatchToProps = {
  changeLocale: changeLocaleAction,
};

@connect(mapStateToProps, mapDispatchToProps)
// @injectReducer({ key: 'localeToggle', reducer })
/* eslint-disable react/prefer-stateless-function */
export default class LocaleToggle extends React.PureComponent {
  onChangeLocale = ({ target: { value } }) => {
    const { changeLocale } = this.props;
    changeLocale(value);
  };

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <select onChange={this.onChangeLocale} defaultValue={this.props.locale}>
          {appLocales.map(locale => <option value={locale}>{locale}</option>)}
        </select>
      </div>
    );
  }
}
