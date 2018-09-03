/**
 *
 * RegistrationPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import RegistrationFormContainer from 'containers/RegistrationFormContainer';

import Icon from 'components/Icon';
import ButtonLink from 'components/ButtonLink';
import TextItem from 'components/TextItem';
import StyledPage from 'components/StyledFormPage';
import Group from 'components/Group';

import messages from './messages';

const CenteredContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  > * {
    margin: 0 10px;
  }
`;

const RegistrationPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <CenteredContent>
      <Icon name="google" size={32} />
      <Icon name="facebook" size={32} />
      <Icon name="twitter" size={32} />
    </CenteredContent>
    <RegistrationFormContainer />
    <Group>
      <TextItem>
        <FormattedMessage {...messages.haveAccount} />&nbsp;
      </TextItem>
      <ButtonLink to="/login">
        <FormattedMessage {...messages.logIn} />
      </ButtonLink>
    </Group>
  </StyledPage>
);

export default RegistrationPage;
