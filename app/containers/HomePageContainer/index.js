/**
 *
 * HomePageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import HomePage from 'components/HomePage';
import { makeSelectCities, makeSelectDistricts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  getCitiesAction,
  selectCityAction,
  selectDistrictAction,
} from './actions';

const mapStateToProps = createStructuredSelector({
  cities: makeSelectCities,
  districts: makeSelectDistricts,
});

const mapDispatchToProps = {
  getCities: getCitiesAction,
  selectCity: selectCityAction,
  selectDistrict: selectDistrictAction,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
@injectReducer({ key: 'homePageContainer', reducer })
@injectSaga({ key: 'homePageContainer', saga })
/* eslint-disable react/prefer-stateless-function */
export default class HomePageContainer extends React.Component {
  static propTypes = {
    getCities: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    selectDistrict: PropTypes.func.isRequired,
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
    const { cities, districts, selectCity, selectDistrict } = this.props;
    return (
      <HomePage
        cities={cities}
        districts={districts}
        selectCity={selectCity}
        selectDistrict={selectDistrict}
      />
    );
  }
}
