import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectIsSettlementLoaded } from 'containers/HomePageContainer/selectors';
import { getCurrentLocationAction } from 'containers/HomePageContainer/actions';
import LocateYourself from 'components/HomePage/SearchBar/LocateYourself';

const mapStateToProps = createStructuredSelector({
  isSettlementLoaded: makeSelectIsSettlementLoaded,
});

const mapDispatchToProps = {
  getCurrentLocation: getCurrentLocationAction,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LocateYourselfContainer extends Component {
  static propTypes = {
    getCurrentLocation: PropTypes.func.isRequired,
    isSettlementLoaded: PropTypes.bool.isRequired,
  };

  render() {
    const { getCurrentLocation, isSettlementLoaded } = this.props;
    return (
      <LocateYourself
        getCurrentLocation={getCurrentLocation}
        isSettlementLoaded={isSettlementLoaded}
      />
    );
  }
}
