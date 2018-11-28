import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import { Line, Question, Answer, HeaderWraper } from '../StyledComponents';
import DropDown from '../DropDown';

import messages from './messages';

const CollectData = () => (
  <div>
    <HeaderWraper>
      <TextItem size={24} fontFamily="regular" style={{ textAlign: 'start' }}>
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWraper>
    <br />
    <Question>
      <DropDown
        title={<FormattedMessage {...messages.ColletInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ColletInformationA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
    <Question>
      <DropDown
        title={<FormattedMessage {...messages.CookiesQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.CookiesA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
    <Question>
      <DropDown
        title={<FormattedMessage {...messages.StorageSecurityQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.StorageSecurityA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
    <Question>
      <DropDown
        title={<FormattedMessage {...messages.UseInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.UseInformationA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
    <Question>
      <DropDown
        title={<FormattedMessage {...messages.AccessInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.AccessInformationA} />
        </Answer>
      </DropDown>
    </Question>
    <Line />
  </div>
);
export default CollectData;
