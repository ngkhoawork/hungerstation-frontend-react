import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledContainer from './StyledContainer';

const LocateYourself = ({ getCurrentLocation }) => (
  <StyledContainer onClick={getCurrentLocation}>
    <Icon name="locate-yourself" size={20} />
  </StyledContainer>
);

LocateYourself.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
};

export default LocateYourself;
