import React from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TextItem from 'components/TextItem';
import { Line, Answer, HeaderWrapper } from '../StyledComponents';
import DropDownMobile from '../Mobile/DropDownMobile';
import { Wrapper } from '../StyledPage';

export default class FaqContent extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <TextItem size={24} fontFamily="regular">
            {this.props.title}
          </TextItem>
        </HeaderWrapper>
        <br />
        {values(this.props.faq).map(item => (
          <div key={item.id}>
            <DropDownMobile title={item.question} isCollapsible>
              <Answer>{item.answer}</Answer>
            </DropDownMobile>
            <Line />
          </div>
        ))}
      </Wrapper>
    );
  }
}
FaqContent.propTypes = {
  title: PropTypes.string,
  faq: PropTypes.string,
};
