import React from 'react';
import intl from 'utils/intlService';
import Button from 'components/Button';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';
import Section from '../Section';
import messages from '../../messages';
import { DetailsWrapper, ImageBackground } from './StyledComponents';

const WhyHSSection = () => (
  <Section
    leftSection={<ImageBackground />}
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
