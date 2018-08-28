/**
 *
 * SearchBarContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SearchBar from 'components/HomePage/UpperSection/SearchBar';
import {
  makeSelectCities,
  makeSelectDistricts,
  makeSelectIsSettlementLoaded,
  makeSelectCity,
  makeSelectDistrict,
} from './selectors';
import {
  getCitiesAction,
  selectCityAction,
  selectDistrictAction,
  getCurrentLocationAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  cities: makeSelectCities,
  districts: makeSelectDistricts,
  isSettlementLoaded: makeSelectIsSettlementLoaded,
  selectedCity: makeSelectCity,
  selectedDistrict: makeSelectDistrict,
});

const mapDispatchToProps = {
  getCities: getCitiesAction,
  selectCity: selectCityAction,
  selectDistrict: selectDistrictAction,
  getCurrentLocation: getCurrentLocationAction,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'searchBarContainer', reducer })
@injectSaga({ key: 'searchBarContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class SearchBarContainer extends React.Component {
  static propTypes = {
    getCities: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    selectDistrict: PropTypes.func.isRequired,
    selectedCity: PropTypes.string,
    selectedDistrict: PropTypes.string,
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ),
    districts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ),
    getCurrentLocation: PropTypes.func.isRequired,
    isSettlementLoaded: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    cities: null,
    districts: null,
  };

  componentWillMount() {
    const { getCities } = this.props;
    getCities();
  }

  render() {
    const {
      cities,
      districts,
      selectCity,
      selectDistrict,
      getCurrentLocation,
      isSettlementLoaded,
      selectedCity,
      selectedDistrict,
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
      />
    );
  }
}
