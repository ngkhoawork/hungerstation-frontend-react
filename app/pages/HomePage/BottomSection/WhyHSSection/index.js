import React from 'react';
import intl from 'utils/intlService';
import Button from 'components/Button';
import { StyledLink } from 'utils/css/styledComponents';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';
import Section from '../Section';
import messages from '../../messages';
import {
  DetailsWrapper,
  ImageBackground,
  leftSectionCss,
} from './StyledComponents';

const WhyHSSection = () => (
  <Section
    leftSection={<ImageBackground />}
    leftSectionCss={leftSectionCss}
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header={intl.formatMessage(messages.whyHungerStation)}
          description={intl.formatMessage(messages.whyHungerStationDescription)}
        />
        <ButtonWrapper style={{ marginTop: 32 }}>
          <StyledLink to="/about-us">
            <Button primary label={intl.formatMessage(messages.buttonCheck)} />
          </StyledLink>
        </ButtonWrapper>
      </DetailsWrapper>
    }
  />
);
export default WhyHSSection;
