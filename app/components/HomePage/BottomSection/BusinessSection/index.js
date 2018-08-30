import React from 'react';

import Button from 'components/Button';
import getImage from 'utils/images';
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
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
