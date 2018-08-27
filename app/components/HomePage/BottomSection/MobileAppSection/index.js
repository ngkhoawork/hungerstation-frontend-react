import React from 'react';

import SectionDetails from 'components/SectionDetails';
import Icon from 'components/Icon';

import Button from 'components/Button';
import Section from '../Section';
import ButtonWrapper from './ButtonWrapper';
import ButtonGroup from './ButtonGroup';
import DetailsWrapper from './DetailsWrapper';

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
      </DetailsWrapper>
    }
  />
);

export default MobileAppSection;
