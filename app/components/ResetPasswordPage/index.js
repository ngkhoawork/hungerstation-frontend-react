/**
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import ResetPasswordFormContainer from 'containers/ResetPasswordFormContainer';

import TextItem from 'components/TextItem';
import StyledPage from 'components/StyledFormPage';
import SocialAuth from 'components/SocialAuth';

import messages from './messages';

const ForgotPasswordPage = () => (
  <StyledPage>
    <TextItem size={40} weight={300} fontFamily="regular">
      <FormattedMessage {...messages.header} />
    </TextItem>
    <TextItem size={15} margin="0.2em 0 1em">
      <FormattedMessage {...messages.subheader} />
    </TextItem>
    <SocialAuth />
    <ResetPasswordFormContainer />
  </StyledPage>
);

export default ForgotPasswordPage;
