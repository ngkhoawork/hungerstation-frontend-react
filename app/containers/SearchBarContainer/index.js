import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
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
} from 'modules/location/actions';
import SearchBar from './SearchBar';

const mapStateToProps = createStructuredSelector({
  cities: selectCities,
  districts: selectDistricts,
  isSettlementLoaded: selectIsSettlementLoaded,
  selectedCity: selectCity,
  selectedDistrict: selectDistrict,
});

const mapDispatchToProps = {
  getCities: getCitiesAction,
  selectCity: selectCityAction,
  selectDistrict: selectDistrictAction,
  getCurrentLocation: getCurrentLocationAction,
};

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
/* eslint-disable react/prefer-stateless-function */
export default class SearchBarContainer extends React.PureComponent {
  static propTypes = {
    getCities: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    selectDistrict: PropTypes.func.isRequired,
    selectedCity: PropTypes.object,
    selectedDistrict: PropTypes.object,
    cities: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ),
    districts: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ),
    getCurrentLocation: PropTypes.func.isRequired,
    isSettlementLoaded: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    cities: null,
    districts: null,
  };

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  handleRedirect = () => {
    const { history, selectedCity, selectedDistrict } = this.props;
    const city = selectedCity && selectedCity.get('name', null);
    const district = selectedDistrict && selectedDistrict.get('name', null);
    let path = '/restaurants';
    if (city && district) {
      path = `/restaurants/${city}/${district}`.toLowerCase().replace(' ', '-');
      history.push(path);
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
      />
    );
  }
}
