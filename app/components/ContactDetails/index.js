import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Icon from 'components/Icon';
import { mediaMedium, flexBox } from 'utils/css/styles';
import CircledItem from 'components/CircledItem';
import Paragraph from 'components/Paragraph';
import { wildSand, ironsideGray } from 'utils/css/colors';
import messages from './messages';
import SocialMedias from '../Footer/UpperSection/SocialMedias';

const ContactDetails = () => (
  <Wrapper>
    <Text>
      <FormattedMessage {...messages.header} />
    </Text>

    <Group>
      <CircledItem color={wildSand} width={28}>
        <Icon name="email" size={12} />
      </CircledItem>
      <Paragraph size={15} color={ironsideGray} margin="0 0 -3px 10px">
        HungerStation@HungerStation.com
      </Paragraph>
    </Group>
    <Group paddin="100px 0 10px 10px">
      <CircledItem color={wildSand} width={28}>
        <Icon name="mobile" size={12} />
      </CircledItem>
      <Paragraph size={16} color={ironsideGray} margin="0 0 -3px 10px">
        +123456789
      </Paragraph>
    </Group>
    <Text>
      <FormattedMessage {...messages.socialMedia} />
    </Text>
    <SocialMedias />
  </Wrapper>
);

export default ContactDetails;

const Wrapper = styled.section`
  width: 289px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  padding: 20px;
  ${mediaMedium`
    display: block;
    margin-left: 20px;
  `};
`;

const Text = styled.div`
  height: 40px;
  width: 297px;
  color: #434340;
  font-family: 'HungerStation-Regular', sans-serif;
  font-size: 16px;
  letter-spacing: 0.33px;
  line-height: 24px;
  padding-top: 20px;
  margin: 6px;
`;

const Group = styled.div`
  ${flexBox({ align: 'center', justify: 'flex-start' })};
  padding-top: 20px;
`;
