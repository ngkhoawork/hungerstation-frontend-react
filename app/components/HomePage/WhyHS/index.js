import React from 'react';

import SectionDetails from 'components/SectionDetails';
import Button from 'components/Button';
import getImage from 'utils/images';
import StyledSection from '../BusinessSection/StyledSection';
import Image from '../Image';

const WhyHS = () => (
  <StyledSection>
    <div style={{ position: 'absolute', left: 90 }}>
      <Image src={getImage('burger')} alt="Burger" />
    </div>
    <SectionDetails
      left
      header="Why use HungerStation?"
      description="No need for looking for restaurants numbers anymore! With HungerStation.com you can select orders from your favorite restaurant and pay cash on delivery!"
    >
      <Button primary type="button" width={133} label="Check" />
    </SectionDetails>
  </StyledSection>
);

export default WhyHS;
