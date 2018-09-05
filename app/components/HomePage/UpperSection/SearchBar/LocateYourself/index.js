import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Spinner from 'components/Spinner';
import StyledContainer from './StyledContainer';

const LocateYourself = ({ getCurrentLocation, isSettlementLoaded }) => (
  <StyledContainer onClick={getCurrentLocation}>
    {isSettlementLoaded && <Icon name="location" size={16} />}
    {!isSettlementLoaded && <Spinner isActive={!isSettlementLoaded} />}
  </StyledContainer>
);

LocateYourself.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  isSettlementLoaded: PropTypes.bool.isRequired,
};

export default LocateYourself;
