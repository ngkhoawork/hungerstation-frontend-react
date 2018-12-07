import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TextItem from 'components/TextItem';
import { FormattedMessage } from 'react-intl';
import WhoWeAre from './WhoWeAre';
import CollectData from './CollectData';
import DropDown from './DropDown';
import Header from './Header';

import messages from './messages';

import {
  Wrapper,
  MenuBar,
  MenuItem,
  Content,
  StyledLink,
  MiddleSection,
  MenuBarMobile,
  Section,
} from './StyledPage';

const routes = [
  {
    path: '/privacy-policy/who-we-are',
    main: () => <WhoWeAre />,
  },
  {
    path: '/privacy-policy/Collect-Data',
    main: () => <CollectData />,
  },
];

const PrivacyPolicy = () => (
  <Router>
    <Wrapper>
      <MenuBar>
        <MenuItem>
          <StyledLink to="/privacy-policy/who-we-are">
            <FormattedMessage {...messages.whoWeAre} />
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/privacy-policy/Collect-Data">
            <FormattedMessage {...messages.CollectData} />
          </StyledLink>
        </MenuItem>
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
            title={<FormattedMessage {...messages.whoWeAre} />}
            isCollapsible
            closeDropDownMenu
          >
            <MenuItem>
              <StyledLink to="/privacy-policy/who-we-are">
                <FormattedMessage {...messages.whoWeAre} />
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/privacy-policy/Collect-Data">
                <FormattedMessage {...messages.CollectData} />
              </StyledLink>
            </MenuItem>
          </DropDown>
        </MenuBarMobile>

        <Content>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Content>
      </MiddleSection>
    </Wrapper>
  </Router>
);

export default PrivacyPolicy;
