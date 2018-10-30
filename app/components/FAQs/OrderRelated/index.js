import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import DropDownMobile from '../Mobile/DropDownMobile';
import { Line, Answer, HeaderWraper } from '../StyledComponents';

import messages from './messages';

const OrderRelated = () => (
  <div>
    <HeaderWraper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWraper>

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.mobileWebsiteQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.mobileWebsiteA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.mobileAppQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.mobileAppA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.registerQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.registerA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.orderStatusQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.orderStatusA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
  </div>
);

export default OrderRelated;
