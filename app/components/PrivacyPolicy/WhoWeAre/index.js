import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import DropDown from '../DropDown';
import { Line, Answer, HeaderWraper } from '../StyledComponents';

import messages from './messages';

const WhoWeAre = () => (
  <div>
    <HeaderWraper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWraper>

    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.ourprivacyPolicyQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ourprivacyPolicyA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.OtherWebsitesQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.OtherWebsitesA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.ContactQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ContactA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
  </div>
);

export default WhoWeAre;
