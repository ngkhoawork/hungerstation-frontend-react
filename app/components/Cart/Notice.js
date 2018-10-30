import React from 'react';
import styled from 'styled-components';
import intl from 'utils/intlService';
import { fontFamilyRegular } from 'utils/css/variables';
import { fuscousGray } from 'utils/css/colors';
import { Description } from 'components/Typography';
import messages from './messages';

const Container = styled.section`
  margin: 20px 0;
`;

const VAT = styled(Description)`
  margin-bottom: 30px;
`;

const Link = styled.a`
  color: ${fuscousGray};
  text-decoration: none;
  font-family: ${fontFamilyRegular};
`;

const Notice = () => (
  <Container>
    <VAT>{intl.formatMessage(messages.vat, { percent: 5 })}</VAT>
    <Description>
      {intl.formatMessage(messages.agreement)}
      <Link href="/terms">{intl.formatMessage(messages.terms)}</Link>
      {intl.formatMessage(messages.and)}
      <Link href="/pp">{intl.formatMessage(messages.privacyPolicy)}</Link>
    </Description>
  </Container>
);

export default Notice;
