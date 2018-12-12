import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCity, selectDistrict } from 'modules/location/selectors';
import LocationOptions from 'components/LocationOptions';

const enhanced = connect(state => ({
  isValid: selectCity(state) != null && selectDistrict(state) !== null,
}));

const LocationOptionsHOC = ({ isValid, ...rest }) => (
  <LocationOptions isValid={isValid} {...rest} />
);

LocationOptionsHOC.propTypes = {
  isValid: PropTypes.bool,
};

export default enhanced(LocationOptionsHOC);
