/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import LoginForm from 'components/LoginForm';
import TextLink from 'components/TextLink';
import TextItem from 'components/TextItem';

import StyledPage from './StyledPage';
import Group from './Group';
import messages from './messages';

const LoginPage = ({ onSubmit }) => (
  <StyledPage>
    <TextItem size={40} weight={600} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15}>
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <LoginForm onSubmit={onSubmit} />
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
