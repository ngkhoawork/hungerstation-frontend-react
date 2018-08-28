import React from 'react';

import Icon from 'components/Icon';

import Button from 'components/Button';
import Section from '../Section';
import ButtonWrapper from './ButtonWrapper';
import ButtonGroup from './ButtonGroup';
import DetailsWrapper from './DetailsWrapper';
import SectionDetails from '../SectionDetails';

const MobileAppSection = () => (
  <Section
    hasBackground
    leftSection={
      <DetailsWrapper>
        <Icon name="phone-big" />
        <SectionDetails
          header="Mobile App for iOS and Android"
          description="Download Hunger Station for your mobile device for the easier order here should be some text"
        />
        <ButtonGroup>
          <ButtonWrapper>
            <Button backgroundImage="applestore" />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button backgroundImage="googleplay" />
          </ButtonWrapper>
        </ButtonGroup>
      </DetailsWrapper>
    }
  />
);

export default MobileAppSection;
