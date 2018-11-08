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
<<<<<<< HEAD
        item.faqgroup.title === 'Technical ' ? (
=======
        item.faqgroup.title === 'Technical ' && (
>>>>>>> fix and convert object to array
          <div key={item.id}>
            <TextItem size={16} fontFamily="regular">
              <DropDownMobile title={item.question} isCollapsible>
                <Answer>{item.answer}</Answer>
              </DropDownMobile>
            </TextItem>
          </div>
        ) : null,
    )}
  </div>
);

export default Technical;
