import React from 'react';
import values from 'lodash/values';

import ContactDetails from 'components/ContactDetails';
import TextItem from 'components/TextItem';
import { FormattedMessage } from 'react-intl';
import FaqContent from './FaqContent';
import DropDownMobile from './Mobile/DropDownMobile';

import messages from './messages';

import {
  Wrapper,
  MenuBar,
  MenuItem,
  Content,
  MiddleSection,
  Title,
  SubTitle,
  MenuBarMobile,
  Section,
} from './StyledPage';

let flag = true;

class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      titleId: '',
      title: '',
      faq: '',
    };
  }

  showContent = (id, title, faq) => {
    flag = false;
    this.setState(() => ({
      shown: true,
      titleId: id,
      title,
      faq,
    }));
  };

  render() {
    return (
      <Wrapper>
        <MenuBar>
          {values(this.props.faqsGroups).map(item => (
            <MenuItem
              key={item.id}
              onClick={() => this.showContent(item.id, item.title, item.faq)}
              active={
                item.id === this.state.titleId ||
                (item.id === this.props.id && flag)
              }
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuBar>

        <MiddleSection>
          <Title>
            <TextItem size={40} weight={300} fontFamily="regular">
              <FormattedMessage {...messages.header} />
            </TextItem>
            <SubTitle>
              <FormattedMessage {...messages.subheader} />
            </SubTitle>
          </Title>

          {/* DropDown Menu Mobile */}
          <Section>
            <TextItem size={28} weight={300} fontFamily="regular">
              <FormattedMessage {...messages.sections} />
            </TextItem>
          </Section>

          <MenuBarMobile>
            <DropDownMobile
              title={this.state.title || this.props.title}
              isCollapsible
              closeDropDownMenu
              closeArrow
            >
              {values(this.props.faqsGroups).map(item => (
                <MenuItem
                  key={item.id}
                  onClick={() =>
                    this.showContent(item.id, item.title, item.faq)
                  }
                >
                  {item.title}
                </MenuItem>
              ))}
            </DropDownMobile>
          </MenuBarMobile>

          <Content>
            {this.state.shown && (
              <FaqContent
                id={this.state.titleId || this.props.id}
                title={this.state.title || this.props.title}
                faq={this.state.faq || this.props.content}
              />
            )}
            {!this.state.shown && (
              <FaqContent
                id={this.props.id}
                title={this.props.title}
                faq={this.props.content}
              />
            )}
          </Content>
        </MiddleSection>

        <ContactDetails />
      </Wrapper>
    );
  }
}
export default FAQs;
