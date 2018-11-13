import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon';
import Button from 'components/Button';
import { mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import PhoneVisualSmall from 'images/phone-visual-small.png';
import Section from '../Section';
import SectionDetails from '../SectionDetails';
import ButtonWrapper from './ButtonWrapper';
import ButtonGroup from './ButtonGroup';
import DetailsWrapper from './DetailsWrapper';

const MobileBackgroundContainer = styled.div`
  ${mediaMediumGreater`display: none;`};

  overflow: visible;
  position: relative;
  padding-top: 100%;
  background-color: ${wildSand};
`;

const MobileBackground = styled.div`
  ${mediaMedium`
    background-image: url(${PhoneVisualSmall});
    position: absolute;
    padding-top: 128%;
    width: 94%;
    bottom: -16%;
    left: 3%;
    background-size: cover;
  `};
`;

const rightSectionCss = css`
  ${mediaMedium`
    padding-bottom: 10%;
    background: white;
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
              <div>Mobile App</div> for iOS & Android
            </div>
          }
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
    rightSection={
      <MobileBackgroundContainer>
        <MobileBackground />
      </MobileBackgroundContainer>
    }
    rightSectionCss={rightSectionCss}
  />
);

export default MobileAppSection;
