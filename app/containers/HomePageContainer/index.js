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
import {
  makeSelectCities,
  makeSelectDistricts,
  makeSelectSearchType,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  getCitiesAction,
  selectCityAction,
  selectDistrictAction,
  selectSearchTypeAction,
} from './actions';

const mapStateToProps = createStructuredSelector({
  cities: makeSelectCities,
  districts: makeSelectDistricts,
  selectedSearchType: makeSelectSearchType,
});

const mapDispatchToProps = {
  getCities: getCitiesAction,
  selectCity: selectCityAction,
  selectDistrict: selectDistrictAction,
  selectSearchType: selectSearchTypeAction,
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
    selectedSearchType: PropTypes.string.isRequired,
    selectSearchType: PropTypes.func.isRequired,
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
      selectedSearchType,
      selectSearchType,
    } = this.props;
    return (
      <HomePage
        cities={cities}
        districts={districts}
        selectCity={selectCity}
        selectDistrict={selectDistrict}
        selectedSearchType={selectedSearchType}
        selectSearchType={selectSearchType}
      />
    );
  }
}
