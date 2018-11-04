import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContactDetails from 'components/ContactDetails';
import OrderRelated from 'components/FAQs/OrderRelated';
import Technical from 'components/FAQs/Technical';
import General from 'components/FAQs/General';
import TextItem from 'components/TextItem';
import { FormattedMessage } from 'react-intl';
import DropDownMobile from './Mobile/DropDownMobile';

import messages from './messages';

import {
  Wrapper,
  MenuBar,
  MenuItem,
  Content,
  StyledLink,
  MiddleSection,
  Title,
  SubTitle,
  MenuBarMobile,
  Section,
} from './StyledPage';

class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      {
        path: '/faqs/Order Related ',
        main: () => <OrderRelated title={this.props.faqsGroups.faqs} />,
      },
      {
        path: '/faqs/Technical ',
        main: () => <Technical title={this.props.faqsGroups.faqs} />,
      },
      {
        path: '/faqs/general',
        main: () => <General title={this.props.faqsGroups.faqs} />,
      },
    ];
  }

  render() {
    // /map for titles
    const titles = this.props.faqsGroups.faqs.map(item => item.faqgroup.title);
    //  filter to remove duplications titles
    const titleUnique = titles.filter(
      (item, index) => titles.indexOf(item) >= index,
    );

    return (
      <Router>
        <Wrapper>
          <MenuBar>
            {titleUnique.map(title => (
              <MenuItem>
                <StyledLink to={`/faqs/${title}`}>{title}</StyledLink>
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
                Sections
              </TextItem>
            </Section>

            <MenuBarMobile>
              <DropDownMobile
                title={<FormattedMessage {...messages.orederRelated} />}
                isCollapsible
              >
                {titleUnique.map(title => (
                  <MenuItem>
                    <StyledLink to={`/faqs/${title}`}>{title}</StyledLink>
                  </MenuItem>
                ))}
              </DropDownMobile>
            </MenuBarMobile>

            <Content>
              {this.routes.map(route => (
                <Route path={route.path} component={route.main} />
              ))}
            </Content>
          </MiddleSection>

          <ContactDetails />
        </Wrapper>
      </Router>
    );
  }
}

export default FAQs;
