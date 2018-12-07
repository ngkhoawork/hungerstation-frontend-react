import React from 'react';
import intl from 'utils/intlService';
import styled from 'styled-components';

import { fuscousGray, ironsideGray } from 'utils/css/colors';
import { flex, sideMargin, mediaMedium, mediaSmall } from 'utils/css/styles';
import { fontFamilyLight } from 'utils/css/variables';

import messages from './messages';

const Header = styled.p`
  font-size: 36px;
  letter-spacing: 0.56px;
  color: ${fuscousGray};
  line-height: 1.2em;
  width: 0;
  overflow: visible;
  ${sideMargin('end', '100%')};
  ${mediaMedium`
        font-size: 35px;
    `};
`;
const Content = styled.div`
  ${flex({ align: 'center', direction: 'column' })};
  ${sideMargin('start', '25%')};
  ${sideMargin('end', '36%')};
`;

const Description = styled.p`
  color: ${ironsideGray};
  font-family: ${fontFamilyLight};
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 24px 0 32px;
  opacity: 0.6;
  line-height: 1.8em;
  ${mediaSmall`
  font-size: 14px;
`};
`;
const AboutSection = () => (
  <Content>
    <Header>{intl.formatMessage(messages.header)}</Header>
    <Description>{intl.formatMessage(messages.description)}</Description>
  </Content>
);

export default AboutSection;
