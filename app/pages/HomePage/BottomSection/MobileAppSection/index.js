import React from 'react';
import intl from 'utils/intlService';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon';
import Button from 'components/Button';
import { mediaMedium, sideMargin, sidePosition } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import PhoneVisualSmall from 'images/phone-visual-small.png';
import PhoneVisual from 'images/phone-visual.png';
import Section from '../Section';
import SectionDetails from '../SectionDetails';
import ButtonWrapper from './ButtonWrapper';
import ButtonGroup from './ButtonGroup';
import DetailsWrapper from './DetailsWrapper';

import messages from './messages';

const MobileBackgroundContainer = styled.div`
  background-image: url(${PhoneVisual});
  background-size: 100%;
  background-position: right bottom;
  ${sideMargin('end', '-90px')};
  overflow: visible;
  position: relative;
  padding-top: 100%;
  background-color: ${wildSand};

  ${mediaMedium`
    background-image: none;
    ${sideMargin('end', '0')}
  `};
`;

const MobileBackground = styled.div`
  ${mediaMedium`
    background-image: url(${PhoneVisualSmall});
    position: absolute;
    padding-top: 126%;
    width: 100%;
    bottom: -15%;
    ${sidePosition('start', '0')};
    background-size: cover;
    
  `};
`;

const rightSectionCss = css`
  ${mediaMedium`
  `};
`;

const MobileAppSection = () => (
  <Section
    hasBackground
    leftSection={
      <DetailsWrapper>
        <Icon name="phone-big" />
        <SectionDetails
          header={
            <div>
              <div>{intl.formatMessage(messages.mobileApp)}</div>{' '}
              {intl.formatMessage(messages.iOSAndroid)}
            </div>
          }
          description={intl.formatMessage(messages.description)}
        />
        <ButtonGroup>
          <ButtonWrapper>
            <Button
              backgroundImage="applestore"
              color="white"
              primary={false}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              backgroundImage="googleplay"
              responsiveBackgroundImg
              color="black"
              primary={false}
              style={{ backgroundSize: 'contain' }}
            />
          </ButtonWrapper>
        </ButtonGroup>
      </DetailsWrapper>
    }
    rightSection={
      <MobileBackgroundContainer>
        <MobileBackground />
      </MobileBackgroundContainer>
    }
    rightSectionCss={rightSectionCss}
  />
);

export default MobileAppSection;
