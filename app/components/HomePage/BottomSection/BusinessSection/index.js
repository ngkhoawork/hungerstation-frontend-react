import React from 'react';

import SectionDetails from 'components/SectionDetails';

import Button from 'components/Button';
import getImage from 'utils/images';
import Image from '../Image';
import ImageGroup from './ImageGroup';

import DetailsWrapper from './DetailsWrapper';

import Section from '../Section';
import ButtonWrapper from '../ButtonWrapper';

// const BusinessSection = () => (
//   <Section
//     direction="reversed"
//     header="HungerStation for business?"
//     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
//   >
//     <Button primary type="button" width={133} label="Check" />
//     <ImageGroup>
//       <Image src={getImage('pizza')} alt="Pizza" />
//       <Image src={getImage('networking')} alt="Networking" />
//     </ImageGroup>
//   </Section>
// );

const BusinessSection = () => (
  <Section
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header="HungerStation for business?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
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
