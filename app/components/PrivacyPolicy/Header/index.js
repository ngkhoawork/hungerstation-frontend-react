import React from 'react';

import getImage from 'utils/css/images';
import intl from 'utils/intlService';
import Image from './Image';
import ImageWrapper from './ImageWrapper';
import DetailsWrapper from './DetailsWrapper';
import SectionDetails from './Section/SectionDetails';
import Section from './Section';

import messages from '../messages';

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
          header={intl.formatMessage(messages.header)}
          description={intl.formatMessage(messages.subheader)}
        />
      </DetailsWrapper>
    }
  />
);
export default Header;
