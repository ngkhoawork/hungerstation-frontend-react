import React from 'react';
import intl from 'utils/intlService';

import getImage from 'utils/css/images';
import Image from '../../pages/HomePage/BottomSection/Image';
import ImageWrapper from '../../pages/HomePage/BottomSection/WhyHSSection/ImageWrapper';
import DetailsWrapper from '../../pages/HomePage/BottomSection/WhyHSSection/DetailsWrapper';
import SectionDetails from '../../pages/HomePage/BottomSection/SectionDetails';

import Section from '../../pages/HomePage/BottomSection/Section';

import messages from '../../pages/HomePage/messages';

const BottomSection = () => (
  <Section
    leftSection={
      <ImageWrapper>
        <Image
          src={getImage('aboutUs')}
          alt="Pizza"
          srcSet={`${getImage('aboutUs')} 850w`}
        />
      </ImageWrapper>
    }
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header={intl.formatMessage(messages.whyHungerStation)}
          description={intl.formatMessage(messages.whyHungerStationDescription)}
        />
      </DetailsWrapper>
    }
  />
);
export default BottomSection;
