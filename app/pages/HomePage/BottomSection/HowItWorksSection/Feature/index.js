import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledFeature, { StyledFeatureIcon } from './StyledFeature';
import Content from './Content';
import Header from './Header';
import Text from './Text';

const Feature = ({ id, label, message }) => (
  <StyledFeature>
    <StyledFeatureIcon>
      <Icon name={`${id}-big`} size={55} />
    </StyledFeatureIcon>
    <Content>
      <Header>{label}</Header>
      <Text>{message}</Text>
    </Content>
  </StyledFeature>
);

Feature.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Feature;
