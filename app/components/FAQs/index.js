import React from 'react';
import { Switch, Route } from 'react-router-dom';
import values from 'lodash/values';
import intl from 'utils/intlService';
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
            title={intl.formatMessage(messages.orderRelated)}
            isCollapsible
          >
            {titleUnique.map(title => (
              <MenuItem key={title}>
                <StyledLink to={`/faqs/${title}`}>{title}</StyledLink>
              </MenuItem>
            ))}
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

      <ContactDetails />
    </Wrapper>
  );
};

export default FAQs;
