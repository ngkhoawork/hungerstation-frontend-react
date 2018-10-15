import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  selectCities,
  selectDistricts,
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
} from 'modules/location/actions';
import { makeSelectSubmitting } from 'hocs/withFormState/selectors';

import SearchBar from './SearchBar';
import types from './propTypes';

const mapStateToProps = createStructuredSelector({
  cities: selectCities,
  districts: selectDistricts,
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
  submitSearchQueryAction: submitSearchQuery,
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
/* eslint-disable react/prefer-stateless-function */
export default class SearchBarContainer extends React.PureComponent {
  static defaultProps = {
    cities: null,
    districts: null,
  };

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  handleRedirect = () => {
    const {
      history,
      selectedCity,
      selectedDistrict,
      submitSearchQueryAction,
    } = this.props;
    const city = selectedCity && selectedCity.get('name', null);
    const district = selectedDistrict && selectedDistrict.get('name', null);
    if (city && district) {
      submitSearchQueryAction(history);
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
        handleSubmit={this.handleRedirect}
        isSubmitting={isSubmitting}
      />
    );
  }
}

SearchBarContainer.propTypes = types;
