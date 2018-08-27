import React from 'react';

import Button from 'components/Button';
import Section from '../Section';
import ButtonWrapper from './ButtonWrapper';
import ButtonGroup from './ButtonGroup';

const MobileAppSection = () => (
  <Section
    header="Mobile App fro iOS and Android"
    description="Download Hunger Station for your mobile device for the easier order here should be some text"
    background
  >
    <ButtonGroup>
      <ButtonWrapper>
        <Button primary backgroundImage="applestore" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button primary backgroundImage="googleplay" />
      </ButtonWrapper>
    </ButtonGroup>
  </Section>
);

export default MobileAppSection;
