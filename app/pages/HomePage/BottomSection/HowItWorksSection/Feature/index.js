import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledFeature, { StyledFeatureIcon } from './StyledFeature';
import RightSide from './RightSide';
import Header from './Header';
import Text from './Text';

const Feature = ({ id, label, message }) => (
  <StyledFeature>
    <StyledFeatureIcon>
      <Icon name={`${id}-big`} size={45} />
    </StyledFeatureIcon>
    <RightSide>
      <Header>{label}</Header>
      <Text>{message}</Text>
    </RightSide>
  </StyledFeature>
);

Feature.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Feature;
