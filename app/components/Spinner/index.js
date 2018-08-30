import React from 'react';
import PropTypes from 'prop-types';

import StyledSpinner from './StyledSpinner';

const Spinner = ({ isActive }) => <StyledSpinner isActive={isActive} />;

Spinner.propTypes = {
  isActive: PropTypes.bool,
};

Spinner.defaultProps = {
  isActive: false,
};

export default Spinner;
