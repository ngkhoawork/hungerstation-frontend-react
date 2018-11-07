import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import { Line, Answer, HeaderWraper } from '../StyledComponents';
import DropDown from '../DropDown';

import messages from './messages';

const CollectData = () => (
  <div>
    <HeaderWraper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWraper>
    <br />
    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.ColletInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.ColletInformationA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.CookiesQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.CookiesA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.StorageSecurityQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.StorageSecurityA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.UseInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.UseInformationA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
    <TextItem size={16} fontFamily="regular">
      <DropDown
        title={<FormattedMessage {...messages.AccessInformationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.AccessInformationA} />
        </Answer>
      </DropDown>
    </TextItem>
    <Line />
  </div>
);
export default CollectData;
