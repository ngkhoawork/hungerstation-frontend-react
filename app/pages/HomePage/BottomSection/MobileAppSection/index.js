import React from 'react';
import intl from 'utils/intlService';
import Icon from 'components/Icon';
import Button from 'components/Button';
import Section from '../Section';
import SectionDetails from '../SectionDetails';
import {
  DetailsWrapper,
  ButtonWrapper,
  ButtonGroup,
  MobileBackgroundContainer,
  MobileBackground,
  rightSectionCss,
  sectionCss,
} from './StyledComponents';
import messages from './messages';

const MobileAppSection = () => (
  <Section
    css={sectionCss}
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
          <ButtonWrapper
            href="https://itunes.apple.com/sa/app/hungerstation/id596011949?mt=8"
            target="_blank"
          >
            <Button
              backgroundImage="applestore"
              color="white"
              primary={false}
            />
          </ButtonWrapper>
          <ButtonWrapper
            href="https://play.google.com/store/apps/details?id=com.hungerstation.android.web&hl=en"
            target="_blank"
          >
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
