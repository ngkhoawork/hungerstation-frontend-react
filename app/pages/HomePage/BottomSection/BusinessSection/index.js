import React from 'react';
import intl from 'utils/intlService';
import Button from 'components/Button';
import Section from '../Section';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';
import messages from '../../messages';
import {
  ImageGroup,
  DetailsWrapper,
  PrimaryImg,
  SecondaryImg,
} from './StyledComponents';

const BusinessSection = () => (
  <Section
    rightSection={
      <DetailsWrapper>
        <SectionDetails
          header={intl.formatMessage(messages.hungerStationBusiness)}
          description={intl.formatMessage(
            messages.hungerStationBusinessDescription,
          )}
        />
        <ButtonWrapper style={{ marginTop: 32 }}>
          <Button primary label={intl.formatMessage(messages.buttonSeeMore)} />
        </ButtonWrapper>
      </DetailsWrapper>
    }
    leftSection={
      <ImageGroup>
        <PrimaryImg />
        <SecondaryImg />
      </ImageGroup>
    }
  />
);

export default BusinessSection;
