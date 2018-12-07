import React from 'react';
import styled from 'styled-components';
import intl from 'utils/intlService';
import getImage from 'utils/css/images';
import { mediaMedium, mediaSmall } from 'utils/css/styles';
import Image from '../../pages/HomePage/BottomSection/Image';
import SectionDetails from '../../pages/HomePage/BottomSection/SectionDetails';
import Section from '../../pages/HomePage/BottomSection/Section';
import messages from '../../pages/HomePage/messages';

const ImageWrapper = styled.div`
  width: 740px;
  ${mediaSmall`
    width: auto;
  `};
`;

const DetailsWrapper = styled.div`
  display: block;
  padding: 60px 100px;
  border-radius: 8px;
  background: white;
  margin-top: 40px;
  line-height: 24px;
  letter-spacing: 0.5px;
  ${mediaMedium`
    padding: 40px;
  `};
  ${mediaSmall`
    margin-top: -80px;
    padding: 20px 20px 60px;
  `};
`;

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
