import React from 'react';

import Button from 'components/Button';
import StyledBox from './StyledBox';
import Header from './Header';
import DetailsText from './DetailsText';

const ExplanationBox = () => (
  <StyledBox>
    <Header>Why use HungerStation?</Header>
    <DetailsText>
      No need for looking for restaurants numbers anymore! With HungerStation
      you can select your orders from your favorite restaurant and pay cash on
      delivery!
    </DetailsText>
    <Button primary type="button" width={133} label="Check" />
  </StyledBox>
);

export default ExplanationBox;
