import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectCities,
  selectedDistricts,
  selectIsSettlementLoaded,
  selectCity,
  selectDistrict,
} from 'modules/location/selectors';
import {
  getCitiesAction,
  selectCityAction,
  selectDistrictAction,
  getCurrentLocationAction,
  submitSearchQuery,
  getCurrentCityAction,
} from 'modules/location/actions';
import { makeSelectSubmitting } from 'hocs/withFormState/selectors';

import SearchBar from './SearchBar';
import types from './propTypes';

const mapStateToProps = createStructuredSelector({
  cities: selectCities,
  districts: selectedDistricts,
  isSettlementLoaded: selectIsSettlementLoaded,
  selectedCity: selectCity,
  selectedDistrict: selectDistrict,
  isSubmitting: makeSelectSubmitting(),
});

const mapDispatchToProps = {
  getCities: getCitiesAction,
  selectCity: selectCityAction,
  selectDistrict: selectDistrictAction,
  getCurrentLocation: getCurrentLocationAction,
  getCurrentCity: getCurrentCityAction,
  submitSearchQueryAction: submitSearchQuery,
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
/* eslint-disable react/prefer-stateless-function */
export default class SearchBarContainer extends React.Component {
  static defaultProps = {
    cities: null,
    districts: null,
  };

  componentDidMount() {
    const { getCurrentCity, selectedDistrict } = this.props;

    if (!selectedDistrict) {
      getCurrentCity();
    }
  }

  handleSubmit = () => {
    const {
      history,
      selectedDistrict,
      selectedCity,
      submitSearchQueryAction,
    } = this.props;
    if (selectedDistrict) {
      submitSearchQueryAction({
        selectedCity,
        selectedDistrict,
        history,
      });
    }
  };

  render() {
    const {
      cities,
      districts,
      selectCity, // eslint-disable-line no-shadow
      selectDistrict, // eslint-disable-line no-shadow
      getCurrentLocation,
      isSettlementLoaded,
      selectedCity,
      selectedDistrict,
      isSubmitting,
      hideSearch,
    } = this.props;
    return (
      <SearchBar
        cities={cities}
        districts={districts}
        selectCity={selectCity}
        selectDistrict={selectDistrict}
        getCurrentLocation={getCurrentLocation}
        isSettlementLoaded={isSettlementLoaded}
        selectedCity={selectedCity}
        selectedDistrict={selectedDistrict}
        handleSubmit={this.handleSubmit}
        isSubmitting={isSubmitting}
        hideSearch={hideSearch}
      />
    );
  }
}

SearchBarContainer.propTypes = types;
