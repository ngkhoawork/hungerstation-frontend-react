import React from 'react';
import intl from 'utils/intlService';
import styled from 'styled-components';
import TextItem from 'components/TextItem';
import Button from 'components/Button';
import { mediaMedium } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';

import messages from './messages';

const ButtonWrapper = styled.div`
  width: 144px;
  height: 40px;

  ${mediaMedium`width: 100%; height: 50px;`};
`;

const Text = styled.p`
  width: 541px;
  opacity: 0.6;
  color: #6f6e6b;
  font-family: ${fontFamilyRegular};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 24px;

  ${mediaMedium`width: 100%;`};
`;

const openMap = () => {
  window.open(
    'https://maps.google.com/maps?daddr=24.817629257410555,46.6416639907593&amp;ll=',
  );
};

const LocationInformation = () => (
  <div>
    <TextItem size={24} fontFamily="regular">
      {intl.formatMessage(messages.addressRoad)}
    </TextItem>
    <Text>{intl.formatMessage(messages.addressDetails)}</Text>
    <Text>{intl.formatMessage(messages.addressRiyadh)}</Text>
    <Text>{intl.formatMessage(messages.addressSaudiArabia)}</Text>
    <ButtonWrapper>
      <Button primary type="button" label="Google Map" onClick={openMap} />
    </ButtonWrapper>
  </div>
);

export default LocationInformation;
