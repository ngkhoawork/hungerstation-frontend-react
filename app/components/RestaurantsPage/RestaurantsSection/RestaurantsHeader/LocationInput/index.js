import React from 'react';

import Icon from 'components/Icon';
import InputWrapper from './InputWrapper';
import StyledInput from './StyledInput';

const LocationInput = () => (
  <InputWrapper>
    <Icon name="pin" />
    <StyledInput placeholder="Almohammadeah, Baljursahi" />
    <Icon name="edit" />
  </InputWrapper>
);

export default LocationInput;
