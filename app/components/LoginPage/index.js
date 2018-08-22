/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import LoginFormContainer from 'containers/LoginFormContainer';
import TextLink from 'components/TextLink';
import TextItem from 'components/TextItem';

import Icon from 'components/Icon';

import StyledPage from './StyledPage';
import Group from './Group';
import messages from './messages';

const CenteredContent = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  // > * {
  //   margin: 0 8px;
  // }
`;

const LoginPage = ({ onSubmit }) => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <CenteredContent>
      <Icon name="google" />
      <Icon name="facebook" />
      <Icon name="twitter" />
    </CenteredContent>
    <LoginFormContainer onSubmit={onSubmit} />
    <TextLink to="/reset-password" color="grey">
      <FormattedMessage {...messages.forgotPassword} />&nbsp;
    </TextLink>
    <Group>
      <TextItem color="grey" size={15}>
        <FormattedMessage {...messages.noAccount} />&nbsp;
      </TextItem>
      <TextLink to="/register">
        <FormattedMessage {...messages.signUp} />
      </TextLink>
    </Group>
  </StyledPage>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginPage;
