/**
 *
 * SearchTypeContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectors/injectReducer';
import SearchTypes from 'pages/HomePage/UpperSection/SearchTypes';
import { makeSelectSearchType } from './selectors';
import reducer from './reducer';
import { selectSearchTypeAction } from './actions';

const mapStateToProps = createStructuredSelector({
  selectedSearchType: makeSelectSearchType,
});

const mapDispatchToProps = {
  selectSearchType: selectSearchTypeAction,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'searchTypeContainer', reducer })
/* eslint-disable react/prefer-stateless-function */
export default class SearchTypeContainer extends React.PureComponent {
  static propTypes = {
    selectSearchType: PropTypes.func.isRequired,
  };

  handleSelect = value => {
    const { selectSearchType } = this.props;
    if (!value) {
      selectSearchType('hungerstation_delivery');
    } else {
      selectSearchType('no_delivery');
    }
  };

  render() {
    return <SearchTypes selectSearchType={this.handleSelect} />;
  }
}
