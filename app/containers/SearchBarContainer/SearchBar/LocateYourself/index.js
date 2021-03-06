import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Spinner from 'components/Spinner';
import CircledItem from 'components/CircledItem';
import { wildSand } from 'utils/css/colors';

import StyledContainer from './StyledContainer';

const LocateYourself = ({ getCurrentLocation, isSettlementLoaded }) => (
  <StyledContainer>
    {(isSettlementLoaded || isSettlementLoaded === undefined) && (
      <CircledItem color={wildSand} width={28} onClick={getCurrentLocation}>
        <Icon name="location" size={16} />
      </CircledItem>
    )}
    {isSettlementLoaded === false && <Spinner isActive={!isSettlementLoaded} />}
  </StyledContainer>
);

LocateYourself.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  isSettlementLoaded: PropTypes.bool,
};

export default LocateYourself;
