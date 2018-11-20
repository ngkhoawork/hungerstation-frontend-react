import React from 'react';
import intl from 'utils/intlService';

import Button from 'components/Button';
import getImage from 'utils/css/images';
import Image from '../Image';
import ImageGroup from './ImageGroup';

import DetailsWrapper from './DetailsWrapper';

import Section from '../Section';
import ButtonWrapper from '../ButtonWrapper';
import SectionDetails from '../SectionDetails';

import messages from '../../messages';

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
        <ButtonWrapper>
          <Button primary label={intl.formatMessage(messages.buttonSeeMore)} />
        </ButtonWrapper>
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
