import React from 'react';

import Button from 'components/Button';
import getImage from 'utils/css/images';
import Image from '../Image';
import ImageGroup from './ImageGroup';

import DetailsWrapper from './DetailsWrapper';

import Section from '../Section';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';

const BusinessSection = () => (
  <Section
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header="HungerStation for business?"
          description="Order office lunch here should be some text about HungerStation for busness, or late- night deliveries to the office. Your favourite restaurant coming to a desk near you or maybe you just want to try sometnig new!"
        />
        <ButtonWrapper>
          <Button primary label="See more" />
        </ButtonWrapper>
      </DetailsWrapper>
    }
    leftSection={
      <ImageGroup>
        <Image src={getImage('pizza')} alt="Pizza" />
        <Image src={getImage('networking')} alt="Networking" />
      </ImageGroup>
    }
  />
);

export default BusinessSection;
