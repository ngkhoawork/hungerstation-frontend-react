import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import values from 'lodash/values';
import intl from 'utils/intlService';
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
>>>>>>> change fetching data
import values from 'lodash/values';

>>>>>>> fix and convert object to array
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

<<<<<<< HEAD
const FAQs = ({ faqsGroups }) => {
  // /map for titles
  const titles = values(faqsGroups.faqs).map(item => item.faqgroup.title);
  //  filter to remove duplications titles
  const titleUnique = titles.filter(
    (item, index) => titles.indexOf(item) >= index,
  );

  return (
    <Wrapper>
      <MenuBar>
        {titleUnique.map(title => (
          <MenuItem key={title}>
            <StyledLink to={`/faqs/${title}`}>{title}</StyledLink>
          </MenuItem>
        ))}
      </MenuBar>

<<<<<<< HEAD
      <MiddleSection>
        <Title>
          <TextItem size={40} weight={300} fontFamily="regular">
            <FormattedMessage {...messages.header} />
          </TextItem>
          <SubTitle>
            <FormattedMessage {...messages.subheader} />
          </SubTitle>
        </Title>
=======
  render() {
    // /map for titles
    const titles = values(this.props.faqsGroups.faqs).map(
      item => item.faqgroup.title,
    );
    //  filter to remove duplications titles
    const titleUnique = titles.filter(
      (item, index) => titles.indexOf(item) >= index,
    );
>>>>>>> fix and convert object to array

        {/* DropDown Menu Mobile */}
        <Section>
          <TextItem size={28} weight={300} fontFamily="regular">
            Sections
          </TextItem>
        </Section>

        <MenuBarMobile>
          <DropDownMobile
            title={intl.formatMessage(messages.orderRelated)}
            isCollapsible
          >
            {titleUnique.map(title => (
              <MenuItem key={title}>
                <StyledLink to={`/faqs/${title}`}>{title}</StyledLink>
              </MenuItem>
            ))}
<<<<<<< HEAD
          </DropDownMobile>
        </MenuBarMobile>

        <Content>
          <Switch>
            <Route
              path="/faqs/order-related"
              render={() => <OrderRelated title={titles} />}
            />
            <Route
              path="/faqs/technical"
              render={() => <Technical title={titles} />}
            />
            <Route
              path="/faqs/general"
              render={() => <General title={titles} />}
            />
          </Switch>
        </Content>
      </MiddleSection>
=======
          </MenuBar>
=======
class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true,
      titleId: '',
      title: '',
      faq: '',
    };
  }

  showContent = (id, title, faq) => {
    this.setState(prevState => ({
      shown: prevState.shown,
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
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuBar>
>>>>>>> change fetching data

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
            <DropDownMobile title={this.state.title} isCollapsible>
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
<<<<<<< HEAD
            </Content>
          </MiddleSection>
>>>>>>> fix and convert object to array

      <ContactDetails />
    </Wrapper>
  );
};

=======
            </DropDownMobile>
          </MenuBarMobile>

          <Content>
            {this.state.shown && (
              <FaqContent
                id={this.state.titleId}
                title={this.state.title}
                faq={this.state.faq}
              />
            )}
          </Content>
        </MiddleSection>

        <ContactDetails />
      </Wrapper>
    );
  }
}
>>>>>>> change fetching data
export default FAQs;
