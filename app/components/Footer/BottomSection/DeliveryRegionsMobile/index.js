import React from 'react';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { alto } from 'utils/colors';
import StyledMobileSection from './StyledMobileSection';
import StyledRegions from './StyledRegions';
import PragraphWrapper from './PragraphWrapper';

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
          <PragraphWrapper>
            <Paragraph color={alto} key={region.id}>
              {region.label}
            </Paragraph>
          </PragraphWrapper>
        ))}
      </StyledRegions>
      <Paragraph>
        See more<span>
          <Icon name="close" />
        </span>
      </Paragraph>
    </StyledMobileSection>
  );
};

export default DeliveryRegionsMobile;
