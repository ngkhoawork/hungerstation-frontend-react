/**
 *
 * LoginPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';

import LoginFormContainer from 'containers/LoginFormContainer';
import ButtonLink from 'components/ButtonLink';
import TextItem from 'components/TextItem';
import SocialAuth from 'components/SocialAuth';
import StyledParagraph from 'components/Paragraph';

import { StyledPage, StyledLink } from 'utils/css/styledComponents';
import { silverChalice } from 'utils/css/colors';

import messages from './messages';

const LoginPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <SocialAuth />
    <LoginFormContainer />
    <StyledParagraph margin="14px 0" size={16}>
      <StyledLink to="/forgot-password" color={silverChalice}>
        <FormattedMessage {...messages.forgotPassword} />
      </StyledLink>
    </StyledParagraph>
    <TextItem color={silverChalice} size={15}>
      <FormattedMessage {...messages.noAccount} />
      <ButtonLink to="/register">
        <FormattedMessage {...messages.signUp} />
      </ButtonLink>
    </TextItem>
  </StyledPage>
);

export default LoginPage;
