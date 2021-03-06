import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Icon from 'components/Icon';
import { fontFamilyRegular, fontFamilyLight } from 'utils/css/variables';
import { mediaMedium, flex } from 'utils/css/styles';
import CircledItem from 'components/CircledItem';
import Paragraph from 'components/Paragraph';
import { wildSand, ironsideGray } from 'utils/css/colors';
import SocialMedias from 'components/Footer/UpperSection/SocialMedias';
import messages from './messages';

const Wrapper = styled.section`
  width: 289px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.1);
  padding: 20px;

  ${mediaMedium`width: 100%;`};
`;

const Text = styled.div`
  height: 40px;
  width: 297px;
  color: #434340;
  font-family: ${fontFamilyRegular};
  font-size: 16px;
  letter-spacing: 0.33px;
  line-height: 24px;
  padding-top: 10px;
  margin: 6px;
`;

const Group = styled.div`
  ${flex({ align: 'center', justify: 'flex-start' })};
  padding-top: 15px;
`;

const ContactDetails = () => (
  <Wrapper>
    <Text>
      <FormattedMessage {...messages.header} />
    </Text>
    <Group>
      <CircledItem color={wildSand} width={28}>
        <Icon name="email" size={12} />
      </CircledItem>
      <Paragraph
        light={fontFamilyLight}
        size={15}
        color={ironsideGray}
        margin="-3px 10px"
      >
        WeCare@hungerstation.com
      </Paragraph>
    </Group>
    <Group>
      <CircledItem color={wildSand} width={28}>
        <Icon name="mobile" size={12} />
      </CircledItem>
      <Paragraph
        light={fontFamilyLight}
        size={16}
        color={ironsideGray}
        margin="-3px 10px"
      >
        +123456789
      </Paragraph>
    </Group>
    <Text style={{ paddingBottom: '30px' }}>
      <FormattedMessage {...messages.socialMedia} />
    </Text>
    <SocialMedias />
  </Wrapper>
);

export default ContactDetails;
