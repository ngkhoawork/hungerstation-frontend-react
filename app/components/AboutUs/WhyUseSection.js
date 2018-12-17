import React from 'react';
import { css } from 'styled-components';
import { sideMargin, mediaMediumGreater } from 'utils/css/styles';
import intl from 'utils/intlService';
import SectionDetails from 'pages/HomePage/BottomSection/SectionDetails';
import Section from 'pages/HomePage/BottomSection/Section';
import messages from 'pages/HomePage/messages';
import {
  DetailsWrapper,
  ImageBackground,
} from 'pages/HomePage/BottomSection/WhyHSSection/StyledComponents';

const leftSectionCss = css`
  ${mediaMediumGreater`
    width: calc(41% + 210px);
    ${sideMargin('end', '-210px')};
  `};
`;

const detailsWrapperCss = css`
  ${mediaMediumGreater`padding: '65px 100px';`};
`;

const BottomSection = () => (
  <Section
    leftSection={<ImageBackground />}
    leftSectionCss={leftSectionCss}
    rightSection={
      <DetailsWrapper css={detailsWrapperCss}>
        <SectionDetails
          header={intl.formatMessage(messages.whyHungerStation)}
          description={intl.formatMessage(messages.whyHungerStationDescription)}
        />
      </DetailsWrapper>
    }
  />
);
export default BottomSection;
