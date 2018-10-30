import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContactDetails from 'components/ContactDetails';
import OrderRelated from 'components/FAQs/OrderRelated';
import Technical from 'components/FAQs/Technical';
import General from 'components/FAQs/General';
import Other from 'components/FAQs/Other';
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

const routes = [
  {
    path: '/faqs/oreder-related',
    main: () => <OrderRelated />,
  },
  {
    path: '/faqs/technical',
    main: () => <Technical />,
  },
  {
    path: '/faqs/general',
    main: () => <General />,
  },
  {
    path: '/faqs/other',
    main: () => <Other />,
  },
];

const FAQs = () => (
  <Router>
    <Wrapper>
      <MenuBar>
        <MenuItem>
          <StyledLink to="/faqs/oreder-related">
            <FormattedMessage {...messages.orederRelated} />
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/faqs/technical">Technical</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/faqs/general">General</StyledLink>
        </MenuItem>
        {/* <MenuItem>
              <StyledLink to="/faqs/other">Other</StyledLink>
            </MenuItem> */}
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
            Section
          </TextItem>
        </Section>

        <MenuBarMobile>
          <DropDownMobile
            title={<FormattedMessage {...messages.orederRelated} />}
            isCollapsible
          >
            <MenuItem>
              <StyledLink to="/faqs/oreder-related">
                <FormattedMessage {...messages.orederRelated} />
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/faqs/technical">Technical</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/faqs/general">General</StyledLink>
            </MenuItem>
          </DropDownMobile>
        </MenuBarMobile>

        <Content>
          {routes.map(route => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Content>
      </MiddleSection>

      <ContactDetails />
    </Wrapper>
  </Router>
);

export default FAQs;
