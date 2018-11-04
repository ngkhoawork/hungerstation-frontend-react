import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import { Answer, HeaderWrapper } from '../StyledComponents';
import DropDownMobile from '../Mobile/DropDownMobile';

import messages from './messages';

const Technical = () => (
  <div>
    <HeaderWrapper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWrapper>
    <br />
    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.SiteNotOpeningQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.SiteNotOpeningA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
  </div>
);
export default Technical;
