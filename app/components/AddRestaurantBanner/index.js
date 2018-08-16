import React from 'react';

import Button from 'components/Button';
import StyledBanner from './StyledBanner';
import ActionText from './ActionText';

const AddRestaurantBanner = () => (
  <StyledBanner>
    <ActionText>Would you like to Join Us?</ActionText>
    <Button label="Add restaurant" type="button" />
  </StyledBanner>
);

export default AddRestaurantBanner;
