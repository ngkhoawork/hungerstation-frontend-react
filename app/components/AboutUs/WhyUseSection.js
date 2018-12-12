import React from 'react';
import intl from 'utils/intlService';
import SectionDetails from '../../pages/HomePage/BottomSection/SectionDetails';
import Section from '../../pages/HomePage/BottomSection/Section';
import messages from '../../pages/HomePage/messages';
import {
  DetailsWrapper,
  ImageBackground,
} from '../../pages/HomePage/BottomSection/WhyHSSection/StyledComponents';

const BottomSection = () => (
  <Section
    leftSection={<ImageBackground />}
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
