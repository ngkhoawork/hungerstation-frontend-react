import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Spinner from 'components/Spinner';
import CircledItem from 'components/CircledItem';
import { wildSant } from 'utils/css/colors';

import StyledContainer from './StyledContainer';

const LocateYourself = ({ getCurrentLocation, isSettlementLoaded }) => (
  <StyledContainer onClick={getCurrentLocation}>
    {isSettlementLoaded && (
      <CircledItem color={wildSant} width={28}>
        <Icon name="location" size={16} />
      </CircledItem>
    )}
    {!isSettlementLoaded && <Spinner isActive={!isSettlementLoaded} />}
  </StyledContainer>
);

LocateYourself.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  isSettlementLoaded: PropTypes.bool.isRequired,
};

export default LocateYourself;
