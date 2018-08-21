import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledFeature from './StyledFeature';
import RightSide from './RightSide';
import Header from './Header';
import Text from './Text';

const Feature = ({ label, message }) => (
  <StyledFeature>
    <Icon name="location-pin" size={15} circled />
    <RightSide>
      <Header>{label}</Header>
      <Text>{message}</Text>
    </RightSide>
  </StyledFeature>
);

Feature.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Feature;
