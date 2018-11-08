import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import DropDownMobile from '../Mobile/DropDownMobile';
import { Line, Answer, HeaderWrapper } from '../StyledComponents';

import messages from './messages';

const OrderRelated = props => (
  <div>
    <HeaderWrapper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWrapper>
    <br />
    {props.title.map(
      item =>
<<<<<<< HEAD
        item.faqgroup.title === 'Order Related ' ? (
=======
        item.faqgroup.title === 'Order Related ' && (
>>>>>>> fix and convert object to array
          <div key={item.id}>
            <TextItem size={16} fontFamily="regular">
              <DropDownMobile title={item.question} isCollapsible>
                <Answer>{item.answer}</Answer>
              </DropDownMobile>
            </TextItem>
            <Line />
          </div>
        ) : null,
    )}
  </div>
);
export default OrderRelated;
