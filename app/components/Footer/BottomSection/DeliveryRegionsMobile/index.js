import React from 'react';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { alto } from 'utils/colors';
import StyledMobileSection from './StyledMobileSection';
import StyledRegions from './StyledRegions';
import PragraphWrapper from './PragraphWrapper';
import StyledAction from './StyledAction';

const DeliveryRegionsMobile = () => {
  const regions = [
    { id: 'alraas', label: 'Al Raas' },
    { id: 'umluj', label: 'Umluj' },
    { id: 'shaqra', label: 'Shaqra' },
    { id: 'sabya', label: 'Sabya' },
    { id: 'aluwayqyilach', label: 'Al Uwayqyilach' },
    { id: 'harmah', label: 'Harmah' },
    { id: 'afif', label: 'Afif' },
    { id: 'ahsa', label: 'Ahsa' },
    { id: 'wadiaddawasir', label: 'Wadi ad-Dawasir' },
    { id: 'bishah', label: 'Bishah' },
  ];
  return (
    <StyledMobileSection>
      <Paragraph size="small">
        Check where you can find us. Our regions:
      </Paragraph>
      <StyledRegions>
        {regions.map(region => (
          <PragraphWrapper key={region.id}>
            <Paragraph color={alto}>{region.label}</Paragraph>
          </PragraphWrapper>
        ))}
      </StyledRegions>
      <StyledAction>
        <Paragraph>See more</Paragraph>
        <Icon name="tick" />
      </StyledAction>
    </StyledMobileSection>
  );
};

export default DeliveryRegionsMobile;
