import React from 'react';

import getImage from 'utils/css/images';
import Image from './Image';
import ImageWrapper from './ImageWrapper';
import DetailsWrapper from './DetailsWrapper';
import SectionDetails from './Section/SectionDetails';

import Section from './Section';

const Header = () => (
  <Section
    leftSection={
      <ImageWrapper>
        <Image
          src={getImage('privacy_policy.png')}
          alt="privacy policy"
          srcSet={`${getImage('privacy_policy')} 850w`}
        />
      </ImageWrapper>
    }
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header="Privacy Policy"
          description="Please read with understanding before using our services"
        />
      </DetailsWrapper>
    }
  />
);
export default Header;
