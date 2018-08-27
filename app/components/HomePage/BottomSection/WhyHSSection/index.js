import React from 'react';

import SectionDetails from 'components/SectionDetails';
import getImage from 'utils/images';
import Image from '../Image';
import ImageWrapper from './ImageWrapper';
import DetailsWrapper from './DetailsWrapper';

import Section from '../Section';

const WhyHSSection = () => (
  <Section
    leftSection={
      <ImageWrapper>
        <Image
          src={getImage('burger')}
          alt="Burger"
          srcSet={`${getImage('burger-small')} 850w`}
        />
      </ImageWrapper>
    }
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header="Why use HungerStation?"
          description="No need for looking for restaurants numbers anymore! With HungerStation.com you can select orders from your favorite restaurant and pay cash on delivery!"
        />
      </DetailsWrapper>
    }
  />
);
export default WhyHSSection;
