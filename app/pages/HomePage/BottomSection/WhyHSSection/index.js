import React from 'react';
import intl from 'utils/intlService';

import Button from 'components/Button';
import getImage from 'utils/css/images';
import Image from '../Image';
import ImageWrapper from './ImageWrapper';
import DetailsWrapper from './DetailsWrapper';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';

import Section from '../Section';

import messages from '../../messages';

const WhyHSSection = () => (
  <Section
    leftSection={
      <ImageWrapper>
        <Image
          src={getImage('burger')}
          alt="Burger"
          srcSet={`${getImage('burger')} 850w`}
        />
      </ImageWrapper>
    }
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header={intl.formatMessage(messages.whyHungerStation)}
          description={intl.formatMessage(messages.whyHungerStationDescription)}
        />
        <ButtonWrapper>
          <Button primary label={intl.formatMessage(messages.buttonCheck)} />
        </ButtonWrapper>
      </DetailsWrapper>
    }
  />
);
export default WhyHSSection;
