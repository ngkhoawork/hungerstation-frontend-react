import React from 'react';

import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import { alto } from 'utils/css/colors';
import intl from 'utils/intlService';
import StyledMobileSection from './StyledMobileSection';
import StyledRegions from './StyledRegions';
import PragraphWrapper from './PragraphWrapper';
import StyledAction from './StyledAction';
import messages from './messages';

const DeliveryRegionsMobile = () => {
  const regions = [
    { id: 'alraas', label: intl.formatMessage(messages.alraas) },
    { id: 'umluj', label: intl.formatMessage(messages.umluj) },
    { id: 'shaqra', label: intl.formatMessage(messages.shaqra) },
    { id: 'sabya', label: intl.formatMessage(messages.sabya) },
    { id: 'aluwayqyilach', label: intl.formatMessage(messages.aluwayqyilach) },
    { id: 'harmah', label: intl.formatMessage(messages.harmah) },
    { id: 'afif', label: intl.formatMessage(messages.afif) },
    { id: 'ahsa', label: intl.formatMessage(messages.ahsa) },
    { id: 'wadiaddawasir', label: intl.formatMessage(messages.wadiaddawasir) },
    { id: 'bishah', label: intl.formatMessage(messages.bishah) },
  ];
  return (
    <StyledMobileSection>
      <Paragraph>{intl.formatMessage(messages.header)}</Paragraph>
      <StyledRegions>
        {regions.map(region => (
          <PragraphWrapper key={region.id}>
            <Paragraph color={alto}>{region.label}</Paragraph>
          </PragraphWrapper>
        ))}
      </StyledRegions>
      <StyledAction>
        <Paragraph>{intl.formatMessage(messages.seeMore)}</Paragraph>
        <Icon name="tick" />
      </StyledAction>
    </StyledMobileSection>
  );
};

export default DeliveryRegionsMobile;
