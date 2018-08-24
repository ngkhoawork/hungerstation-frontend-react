import React from 'react';

import Button from 'components/Button';
import Section from '../Section';

const MobileAppSection = () => (
  <Section
    header="Mobile App fro iOS and Android"
    description="Download Hunger Station for your mobile device for the easier order here should be some text"
    background
  >
    <Button primary type="button" width={133} label="Check" />
  </Section>
);

export default MobileAppSection;
