import React from 'react';

import TextItem from 'components/TextItem';
import { FormattedMessage } from 'react-intl';
import DropDown from './DropDown';
import Header from './Header';
import messages from './messages';
import {
  Wrapper,
  MenuBar,
  MenuItem,
  Content,
  MiddleSection,
  MenuBarMobile,
  Section,
} from './StyledPage';
import { Line, Question, Answer, HeaderWraper } from './StyledComponents';
import questions from './PrivacyPolicyContent';

let flag = true;

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      id: '',
      title: '',
      content: '',
    };
  }

  showContent = (id, title, content) => {
    flag = false;
    this.setState(() => ({
      shown: true,
      id,
      title,
      content,
    }));
  };

  render() {
    return (
      <Wrapper>
        <MenuBar>
          {questions.map(item => (
            <MenuItem
              key={item.id}
              onClick={() =>
                this.showContent(item.id, item.title, item.content)
              }
              active={
                item.id === this.state.id ||
                (item.id === questions[0].id && flag)
              }
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuBar>

        <MiddleSection>
          <Header />

          {/* DropDown Menu Mobile */}
          <Section>
            <TextItem size={28} weight={300} fontFamily="regular">
              <FormattedMessage {...messages.sections} />
            </TextItem>
          </Section>

          <MenuBarMobile>
            <DropDown
              title={this.state.title || questions[0].title}
              isCollapsible
              closeDropDownMenu
            >
              {questions.map(item => (
                <MenuItem
                  key={item.id}
                  onClick={() =>
                    this.showContent(item.id, item.title, item.content)
                  }
                >
                  {item.title}
                </MenuItem>
              ))}
            </DropDown>
          </MenuBarMobile>

          <Content>
            {!this.state.shown && (
              <div>
                <HeaderWraper>
                  <TextItem size={24} fontFamily="regular" textAlign="start">
                    {questions[0].title}
                  </TextItem>
                </HeaderWraper>
                {questions[0].content.map(item => (
                  <Question key={item.id}>
                    <DropDown title={item.label} isCollapsible>
                      <Answer>{item.answer}</Answer>
                    </DropDown>
                    <Line />
                  </Question>
                ))}
              </div>
            )}
            {this.state.shown && (
              <div>
                <HeaderWraper>
                  <TextItem size={24} fontFamily="regular" textAlign="start">
                    {this.state.title}
                  </TextItem>
                </HeaderWraper>
                <Question>
                  {this.state.content.map(item => (
                    <div key={item.id}>
                      <DropDown title={item.label} isCollapsible>
                        <Answer>{item.answer}</Answer>
                      </DropDown>
                      <Line />
                    </div>
                  ))}
                </Question>
              </div>
            )}
          </Content>
        </MiddleSection>
      </Wrapper>
    );
  }
}
export default PrivacyPolicy;
