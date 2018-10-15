import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectDistrict, selectCity } from 'modules/location/selectors';

export const mapStateToProps = createSelector(
  selectCity,
  selectDistrict,
  (city, district) => ({ location: city && district ? [city, district] : [] }),
);

export default WrapperComponent => connect(mapStateToProps)(WrapperComponent);
