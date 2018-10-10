import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default {
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
  submitSearchQueryAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
