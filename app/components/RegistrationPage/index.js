/**
 *
 * RegistrationPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';

import RegistrationFormContainer from 'containers/RegistrationFormContainer';

import TextLink from 'components/TextLink';
import TextItem from 'components/TextItem';
import StyledPage from 'components/StyledFormPage';
import Group from 'components/Group';

import messages from './messages';

const RegistrationPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15}>
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <RegistrationFormContainer />
    <Group>
      <TextItem>
        <FormattedMessage {...messages.haveAccount} />&nbsp;
      </TextItem>
      <TextLink to="/login">
        <FormattedMessage {...messages.logIn} />
      </TextLink>
    </Group>
  </StyledPage>
);

export default RegistrationPage;
