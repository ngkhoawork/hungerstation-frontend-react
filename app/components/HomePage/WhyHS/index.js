import React from 'react';

import SectionDetails from 'components/SectionDetails';
import BananaSandwich from 'images/banana-sandwich.jpg';
import Button from 'components/Button';
import StyledSection from '../BusinessSection/StyledSection';
import Image from './Image';

const WhyHS = () => (
  <StyledSection>
    <Image src={BananaSandwich} alt="Holding Burger" />
    <SectionDetails
      header="Why use HungerStation?"
      description="No need for looking for restaurants numbers anymore! With HungerStation.com you can select orders from your favorite restaurant and pay cash on delivery!"
    >
      <Button primary type="button" width={133} label="Check" />
    </SectionDetails>
  </StyledSection>
);

export default WhyHS;
