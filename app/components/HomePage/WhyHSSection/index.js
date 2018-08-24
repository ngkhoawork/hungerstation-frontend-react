import React from 'react';

import Button from 'components/Button';
import getImage from 'utils/images';
import Image from '../Image';
import ImageWrapper from './ImageWrapper';

import Section from '../Section';

const WhyHSSection = () => (
  <Section
    direction="reversed"
    header="Why use HungerStation?"
    description="No need for looking for restaurants numbers anymore! With HungerStation.com you can select orders from your favorite restaurant and pay cash on delivery!"
  >
    <Button primary type="button" width={133} label="Check" />
    <ImageWrapper>
      <Image src={getImage('burger')} alt="Burger" />
    </ImageWrapper>
  </Section>
);

export default WhyHSSection;
