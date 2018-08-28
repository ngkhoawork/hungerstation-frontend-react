/**
 *
 * LoginPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import LoginFormContainer from 'containers/LoginFormContainer';
import TextLink from 'components/TextLink';
import ButtonLink from 'components/ButtonLink';
import TextItem from 'components/TextItem';
import Icon from 'components/Icon';
import StyledPage from 'components/StyledFormPage';
import Group from 'components/Group';

import messages from './messages';

const CenteredContent = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

const LoginPage = () => (
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
    <LoginFormContainer />
    <TextLink to="/forgot-password" color="grey">
      <FormattedMessage {...messages.forgotPassword} />&nbsp;
    </TextLink>
    <Group>
      <TextItem color="grey" size={15}>
        <FormattedMessage {...messages.noAccount} />&nbsp;
      </TextItem>
      <ButtonLink to="/register">
        <FormattedMessage {...messages.signUp} />
      </ButtonLink>
    </Group>
  </StyledPage>
);

export default LoginPage;
