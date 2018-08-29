/**
 *
 * HomePageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import HomePage from 'components/HomePage';
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
@injectReducer({ key: 'homePageContainer', reducer })
/* eslint-disable react/prefer-stateless-function */
export default class HomePageContainer extends React.Component {
  static propTypes = {
    selectedSearchType: PropTypes.string.isRequired,
    selectSearchType: PropTypes.func.isRequired,
  };

  render() {
    const { selectedSearchType, selectSearchType } = this.props;
    return (
      <HomePage
        selectedSearchType={selectedSearchType}
        selectSearchType={selectSearchType}
      />
    );
  }
}
