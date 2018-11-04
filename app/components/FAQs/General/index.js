import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import { Line, Answer, HeaderWrapper } from '../StyledComponents';
import DropDownMobile from '../Mobile/DropDownMobile';

import messages from './messages';

const General = () => (
  <div>
    <HeaderWrapper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWrapper>
    <br />
    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.workingHoursQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.workingHoursA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.deliveryCompanyQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.deliveryCompanyA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.whatHungerStationQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.whatHungerStationA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.hungerStationOfficesQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.hungerStationOfficesA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
    <Line />

    <TextItem size={16} fontFamily="regular">
      <DropDownMobile
        title={<FormattedMessage {...messages.acceptPaymentsQ} />}
        isCollapsible
      >
        <Answer>
          <FormattedMessage {...messages.acceptPaymentsA} />
        </Answer>
      </DropDownMobile>
    </TextItem>
  </div>
);
export default General;
