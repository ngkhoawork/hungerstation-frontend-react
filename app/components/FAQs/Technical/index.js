import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextItem from 'components/TextItem';
import { Answer, HeaderWrapper } from '../StyledComponents';
import DropDownMobile from '../Mobile/DropDownMobile';

import messages from './messages';

const Technical = props => (
  <div>
    <HeaderWrapper>
      <TextItem size={24} fontFamily="regular">
        <FormattedMessage {...messages.Title} />
      </TextItem>
    </HeaderWrapper>
    <br />
    {props.title.map(
      item =>
        item.faqgroup.title === 'Technical ' && (
          <div>
            <TextItem size={16} fontFamily="regular">
              <DropDownMobile title={item.question} isCollapsible>
                <Answer>{item.answer}</Answer>
              </DropDownMobile>
            </TextItem>
          </div>
        ),
    )}
  </div>
);

export default Technical;
