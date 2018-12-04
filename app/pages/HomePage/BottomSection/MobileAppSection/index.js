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
