import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default {
  getCities: PropTypes.func,
  selectCity: PropTypes.func,
  selectDistrict: PropTypes.func,
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
  getCurrentLocation: PropTypes.func,
  isSettlementLoaded: PropTypes.bool,
  submitSearchQueryAction: PropTypes.func,
  history: PropTypes.object,
  isSubmitting: PropTypes.bool,
};
