import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import DropDown from '../DropDown';
import { Line, Question, Answer, HeaderWraper } from '../StyledComponents';

import messages from './messages';

const WhoWeAre = () => (
  <div>
    <HeaderWraper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWraper>

    <Question>
      <DropDown
        title={<FormattedMessage {...messages.ourprivacyPolicyQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ourprivacyPolicyA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />

    <Question>
      <DropDown
        title={<FormattedMessage {...messages.OtherWebsitesQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.OtherWebsitesA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />

    <Question>
      <DropDown
        title={<FormattedMessage {...messages.ContactQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ContactA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
  </div>
);

export default WhoWeAre;
